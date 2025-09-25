import { PropsWithChildren, useEffect, useRef } from "react";

interface ScrollRevealProps {
  className?: string;
  animation?: "reveal" | "reveal-in";
  delayClassName?: string; // e.g., reveal-delay-1
}

const ScrollReveal = ({ className = "", children, animation = "reveal", delayClassName = "" }: PropsWithChildren<ScrollRevealProps>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = `${animation} ${delayClassName}`.trim();

  return (
    <div ref={ref} className={`${base} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ScrollReveal;

