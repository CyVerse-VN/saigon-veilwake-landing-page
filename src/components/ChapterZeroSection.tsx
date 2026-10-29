import ChapterZeroTimeline from "./ChapterZeroTimeline";

export default function ChapterZeroSection() {
  return (
    <section id="chapter-zero" className="py-12 sm:py-16 border-t border-sky-border/60 bg-gradient-to-b from-white via-sky-50/20 to-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterZeroTimeline />
      </div>
    </section>
  );
}

