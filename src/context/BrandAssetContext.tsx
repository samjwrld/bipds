import React, { createContext, useContext, useState, useEffect } from 'react';

interface BrandAssets {
  lightLogoUrl: string | null;
  darkLogoUrl: string | null;
  certificateUrl: string | null;
  hasNameInLogo: boolean;
}

interface BrandAssetContextType {
  assets: BrandAssets;
  uploadLightLogo: (file: File) => Promise<string>;
  uploadDarkLogo: (file: File) => Promise<string>;
  uploadCertificate: (file: File) => Promise<string>;
  setHasNameInLogo: (value: boolean) => void;
  resetAsset: (type: 'lightLogo' | 'darkLogo' | 'certificate' | 'all') => void;
  isUploadModalOpen: boolean;
  openUploadModal: () => void;
  closeUploadModal: () => void;
}

const BrandAssetContext = createContext<BrandAssetContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LIGHT_LOGO: 'custom_brand_light_logo_png',
  DARK_LOGO: 'custom_brand_dark_logo_png',
  CERTIFICATE: 'custom_brand_certificate_png',
  HAS_NAME: 'custom_brand_has_name_in_logo',
};

export function BrandAssetProvider({ children }: { children: React.ReactNode }) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [assets, setAssets] = useState<BrandAssets>(() => {
    if (typeof window !== 'undefined') {
      return {
        lightLogoUrl: localStorage.getItem(STORAGE_KEYS.LIGHT_LOGO),
        darkLogoUrl: localStorage.getItem(STORAGE_KEYS.DARK_LOGO),
        certificateUrl: localStorage.getItem(STORAGE_KEYS.CERTIFICATE),
        hasNameInLogo: localStorage.getItem(STORAGE_KEYS.HAS_NAME) === 'true',
      };
    }
    return {
      lightLogoUrl: null,
      darkLogoUrl: null,
      certificateUrl: null,
      hasNameInLogo: false,
    };
  });

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const uploadLightLogo = async (file: File): Promise<string> => {
    const dataUrl = await fileToDataUrl(file);
    localStorage.setItem(STORAGE_KEYS.LIGHT_LOGO, dataUrl);
    setAssets((prev) => ({ ...prev, lightLogoUrl: dataUrl }));
    return dataUrl;
  };

  const uploadDarkLogo = async (file: File): Promise<string> => {
    const dataUrl = await fileToDataUrl(file);
    localStorage.setItem(STORAGE_KEYS.DARK_LOGO, dataUrl);
    setAssets((prev) => ({ ...prev, darkLogoUrl: dataUrl }));
    return dataUrl;
  };

  const uploadCertificate = async (file: File): Promise<string> => {
    const dataUrl = await fileToDataUrl(file);
    localStorage.setItem(STORAGE_KEYS.CERTIFICATE, dataUrl);
    setAssets((prev) => ({ ...prev, certificateUrl: dataUrl }));
    return dataUrl;
  };

  const setHasNameInLogo = (value: boolean) => {
    localStorage.setItem(STORAGE_KEYS.HAS_NAME, String(value));
    setAssets((prev) => ({ ...prev, hasNameInLogo: value }));
  };

  const resetAsset = (type: 'lightLogo' | 'darkLogo' | 'certificate' | 'all') => {
    if (type === 'lightLogo' || type === 'all') {
      localStorage.removeItem(STORAGE_KEYS.LIGHT_LOGO);
      setAssets((prev) => ({ ...prev, lightLogoUrl: null }));
    }
    if (type === 'darkLogo' || type === 'all') {
      localStorage.removeItem(STORAGE_KEYS.DARK_LOGO);
      setAssets((prev) => ({ ...prev, darkLogoUrl: null }));
    }
    if (type === 'certificate' || type === 'all') {
      localStorage.removeItem(STORAGE_KEYS.CERTIFICATE);
      setAssets((prev) => ({ ...prev, certificateUrl: null }));
    }
    if (type === 'all') {
      localStorage.removeItem(STORAGE_KEYS.HAS_NAME);
      setAssets((prev) => ({ ...prev, hasNameInLogo: false }));
    }
  };

  return (
    <BrandAssetContext.Provider
      value={{
        assets,
        uploadLightLogo,
        uploadDarkLogo,
        uploadCertificate,
        setHasNameInLogo,
        resetAsset,
        isUploadModalOpen,
        openUploadModal: () => setIsUploadModalOpen(true),
        closeUploadModal: () => setIsUploadModalOpen(false),
      }}
    >
      {children}
    </BrandAssetContext.Provider>
  );
}

export function useBrandAssets() {
  const context = useContext(BrandAssetContext);
  if (!context) {
    throw new Error('useBrandAssets must be used within a BrandAssetProvider');
  }
  return context;
}
