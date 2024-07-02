// encryption-banner.js

// Shared Tailwind CSS classes
const FLEX_CLASS = "flex";
const FLEX_COL_CLASS = "flex-col";
const ITEMS_CENTER_CLASS = "items-center";
const JUSTIFY_CENTER_CLASS = "justify-center";
const BG_BLACK_CLASS = "bg-black";
const TEXT_WHITE_CLASS = "text-white";
const PADDING_8_CLASS = "p-8";
const TEXT_3XL_CLASS = "text-3xl";
const FONT_BOLD_CLASS = "font-bold";
const TEXT_LG_CLASS = "text-lg";
const W_FULL_CLASS = "w-full";
const H_FULL_CLASS = "h-full";
const OBJECT_COVER_CLASS = "object-cover";
const MD_FLEX_ROW_CLASS = "md:flex-row";
const GAP_4_CLASS = "gap-4";
const MD_W_1_2_CLASS = "md:w-1/2";
const H_SCREEN_CLASS = "h-screen";
const MD_H_SCREEN_CLASS = "md:h-screen";
const H_1_2_SCREEN_CLASS = "h-[50vh]";
const BORDER_2_CLASS = "border-2";
const BORDER_WHITE_CLASS = "border-white";
const BORDER_BLACK_CLASS = "border-black";
const ROUNDED_LG_CLASS = "rounded-lg";
const RING_4_CLASS = "ring-4";
const RING_WHITE_CLASS = "ring-white";
const RING_OPACITY_50_CLASS = "ring-opacity-50";
const P_6_CLASS = "p-6";
const MAX_W_FULL_CLASS = "max-w-full";
const MAX_W_96 = "max-w-96";
const OBJECT_CONTAIN_CLASS = "object-contain";
const F_FULL_CLASS = "w-full";

// Encryption Banner Component
// Encryption Banner Component
class EncryptionBanner extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-1/2 flex items-center justify-center">
            <img src="Picture1.png" alt="Office Meeting" class="object-contain w-full h-full ring-4 border-black">
          </div>
  
          <div class="md:w-1/2 flex items-center justify-center bg-black text-white p-8">
            <div class="border-2 border-white rounded-lg ring-4 ring-white ring-opacity-50 p-6">
              <h2 class="text-3xl font-bold mb-4">Fortified, multi-layered encryption unique to your organization</h2>
              <p class="text-lg">
                We have taken extreme care in designing our encryption systems to protect your most sensitive data. Any financial reports you upload to Digits are uniquely secured for your organization using per-secret, authenticated envelope encryption.
              </p>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-1/2 flex items-center justify-center">
            <img src="Picture1.png" alt="Office Meeting" class="object-contain w-full h-full ring-4 border-black">
          </div>
  
          <div class="md:w-1/2 flex items-center justify-center bg-black text-white p-8">
            <div class="border-2 border-white rounded-lg ring-4 ring-white ring-opacity-50 p-6">
              <h2 class="text-3xl font-bold mb-4">Fortified, multi-layered encryption unique to your organization</h2>
              <p class="text-lg">
                We have taken extreme care in designing our encryption systems to protect your most sensitive data. Any financial reports you upload to Digits are uniquely secured for your organization using per-secret, authenticated envelope encryption.
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('encryption-banner', EncryptionBanner);