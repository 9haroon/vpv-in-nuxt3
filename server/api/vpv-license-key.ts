export default defineEventHandler((event) => {
  const { vpvLicenseKey } = useRuntimeConfig(event);
  if (vpvLicenseKey && typeof vpvLicenseKey !== "undefined") {
    return {
      licenseKey: vpvLicenseKey,
    };
  }
  return {
    licenseKey: null,
  };
});
