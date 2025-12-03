import { create } from 'zustand';

interface UIStore {
    isMobileMenuOpen: boolean;
    isSearchOpen: boolean;
    isLoading: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleSearch: () => void;
    setLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isMobileMenuOpen: false,
    isSearchOpen: false,
    isLoading: false,

    toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

    closeMobileMenu: () => set({ isMobileMenuOpen: false }),

    toggleSearch: () =>
        set((state) => ({ isSearchOpen: !state.isSearchOpen })),

    setLoading: (loading) => set({ isLoading: loading }),
}));
