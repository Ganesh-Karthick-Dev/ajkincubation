import { create } from 'zustand';

export const useNavbarStore = create((set, get) => ({
  isModalOpen: false,
  isDesktopMenuOpen: false,
  scrollPosition: 0,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setIsDesktopMenuOpen: (isOpen) => set({ isDesktopMenuOpen: isOpen }),
  setScrollPosition: (position) => {
    set({ scrollPosition: position });
    // Auto-open desktop menu when scroll reaches 38
    if (position >= 38 && !get().isDesktopMenuOpen) {
      set({ isDesktopMenuOpen: true });
    }
  },
}));