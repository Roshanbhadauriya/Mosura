import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import { PANEL_CONTENT, HeaderMenuId, PROMO_CONTENT } from "@/constants/header";

type HeaderPanelProps = {
  activeMenu: HeaderMenuId;
  onClose?: () => void;
};

const panelVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1], // Custom easing for smooth reveal
      when: "beforeChildren", // Wait for panel to open before starting child animations
      staggerChildren: 0.05, // Stagger the sections
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05, // Stagger items within section
    },
  },
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

const HeaderPanel = ({ activeMenu, onClose }: HeaderPanelProps) => {
  const isFeatures = activeMenu === "features";

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          key="header-panel"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute left-0 top-full w-full overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl z-50 origin-top"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {isFeatures && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 border-b border-white/5 pb-5"
              >
                <Link 
                  href={PROMO_CONTENT.mosura.href}
                  onClick={onClose}
                  className="group inline-flex flex-col gap-0.5 hover:opacity-120 transition-opacity"
                >
                <h2 className="text-xl font-bold tracking-tight text-(--primary-color) flex items-center justify-between w-full transition-colors">
                  <span >{PROMO_CONTENT.mosura.title} </span>
                  <svg className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  {PROMO_CONTENT.mosura.subtitle}
                </p>
              </Link> 
            </motion.div>
          )}

          <motion.div 
            key={activeMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              isFeatures 
                ? "grid gap-6 md:grid-cols-2" 
                : (activeMenu && PANEL_CONTENT[activeMenu as keyof typeof PANEL_CONTENT]?.length === 1) 
                  ? "grid gap-6 md:grid-cols-1" 
                  : "grid gap-5 md:grid-cols-3"
            }
          >
            {activeMenu && PANEL_CONTENT[activeMenu as keyof typeof PANEL_CONTENT]?.map((section) => (
                <motion.div
                variants={sectionVariants}
                key={section.title}
                className="space-y-3"
              >
                {!isFeatures && (
                  <h3 className="text-[10px] font-boldtracking-[0.2em] text-slate-500/80">
                    {section.title}
                  </h3>
                )}
                  <div className={
                    (activeMenu && PANEL_CONTENT[activeMenu as keyof typeof PANEL_CONTENT]?.length === 1)
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "grid gap-2"
                  }>
                    {section.items.map((item) => (
                      <motion.li variants={itemVariants} key={item.label} className="list-none">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group relative flex h-full w-full flex-col items-start rounded-lg border border-transparent p-3 text-left transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20"
                        >
                          <span className="text-[14px] font-semibold text-slate-200 group-hover:text-(--primary-color) transition-colors duration-200">
                            {item.label}
                          </span>
                          <span className="mt-1 text-[12px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors duration-200 mb-2">
                            {item.description}
                          </span>
                          <div className="mt-auto flex w-full items-center justify-end">
                            <span className="text-[11px] font-medium text-(--primary-color) opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              Learn more &rarr;
                            </span>
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { HeaderPanel };
