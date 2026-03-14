import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { 
  ExternalLinkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  Cross2Icon,
  MagnifyingGlassIcon
} from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

interface DesignItemInterface {
  title: string;
  description: string;
  images: {
    url: string;
    alt?: string;
    ratio?: "landscape" | "portrait" | "square";
  }[];
  link?: string;
  tags?: string[];
}

export function DesignItem({
  title,
  description,
  images,
  link,
  tags = []
}: DesignItemInterface) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { resolvedTheme } = useTheme();
  const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return;
      
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setIsDialogOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDialogOpen, currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getImageContainerClass = () => {
    // Fixed height container regardless of ratio
    return "h-64"; // Adjust this value as needed for your design
  };

  const getImageClass = () => {
    const ratio = images[currentImageIndex]?.ratio || "landscape";
    switch (ratio) {
      case "portrait":
        return "h-full w-auto mx-auto"; // Center portrait images horizontally
      case "square":
        return "h-full w-full object-cover"; // Cover for square
      default:
        return "w-full h-full object-cover"; // Cover for landscape
    }
  };

  return (
    <div className="relative group bg-card border border-border rounded-xl overflow-hidden hover:border-icon transition-all duration-200 h-full flex flex-col">
      {/* Image Preview with Hover/Click Handler */}
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Trigger asChild>
          <div 
            className={`relative ${getImageContainerClass()} overflow-hidden cursor-zoom-in bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setIsDialogOpen(true)}
          >
            {/* Current Image */}
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt || `${title} design ${currentImageIndex + 1}`}
              className={`${getImageClass()} transition-transform duration-500 group-hover:scale-105`}
            />

            {/* Hover Overlay with Zoom Icon */}
            <div className={`absolute inset-0 bg-foreground/30 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <MagnifyingGlassIcon className="size-10 text-icon/80" />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 text-foreground rounded-full p-2 shadow-md hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-icon"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="size-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 text-foreground rounded-full p-2 shadow-md hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-icon"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="size-5" />
                </button>
              </>
            )}

            {/* Image Indicator Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`size-2 rounded-full transition-all ${index === currentImageIndex ? "bg-icon w-4" : "bg-border/50"}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </Dialog.Trigger>

        {/* Modal Dialog with Full Carousel */}
        <Dialog.Portal>
          <Dialog.Overlay className={`${isLight ? "" : "dark"} fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50`} />
          <Dialog.Content className={`${isLight ? "" : "dark"} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[90vh] z-50 focus:outline-none`}>
            <div className="relative bg-card rounded-xl overflow-hidden h-full flex flex-col border border-border">
              {/* Close Button */}
              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 z-10 bg-card/80 text-foreground rounded-full p-2 shadow-lg hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-icon"
                  aria-label="Close"
                >
                  <Cross2Icon className="size-6" />
                </button>
              </Dialog.Close>

              {/* Full-size Carousel */}
              <div className="flex-grow relative overflow-hidden">
                {/* Current Image */}
                <img
                  src={images[currentImageIndex].url}
                  alt={images[currentImageIndex].alt || `${title} design ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 text-foreground rounded-full p-3 shadow-lg hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-icon z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="size-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 text-foreground rounded-full p-3 shadow-lg hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-icon z-10"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="size-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Footer with Image Info and Dots */}
              <div className="p-4 bg-card border-t border-border">
                <div className="flex flex-col items-center">
                  {/* Image Indicator Dots */}
                  {images.length > 1 && (
                    <div className="flex gap-2 mb-3">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`size-3 rounded-full transition-all ${index === currentImageIndex ? "bg-icon w-6" : "bg-border/50"}`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-heading">
                      {title} - {currentImageIndex + 1}/{images.length}
                    </h3>
                    {images[currentImageIndex].alt && (
                      <p className="text-text">{images[currentImageIndex].alt}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Content Below Image */}
      <div className="p-4 2xl:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-heading tracking-tight line-clamp-1">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-icon transition-colors"
              aria-label={`View ${title} design`}
            >
              <ExternalLinkIcon className="size-5" />
            </a>
          )}
        </div>

        <p className="text-text mb-4 line-clamp-2">{description}</p>

        {tags.length > 0 && (
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-border/20 text-text rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}