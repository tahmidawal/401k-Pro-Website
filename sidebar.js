// sidebar.js

// Shared Tailwind CSS classes
const FLEX_CLASS = "flex";
const FLEX_COL_CLASS = "flex-col";
const ITEMS_CENTER_CLASS = "items-center";
const JUSTIFY_CENTER_CLASS = "justify-center";
const BG_GRAY_CLASS = "bg-gray-800";
const TEXT_WHITE_CLASS = "text-white";
const PADDING_8_CLASS = "p-8";
const TEXT_LG_CLASS = "text-lg";
const W_1_5_CLASS = "w-1/5";
const H_FULL_CLASS = "h-full";
const MD_HIDDEN_CLASS = "md:hidden";
const BORDER_R_CLASS = "border-r";
const BORDER_GRAY_700_CLASS = "border-gray-700";
const FLEX_ROW_CLASS = "flex-row";
const GAP_4_CLASS = "gap-4";
const MD_W_1_5_CLASS = "md:w-1/5";
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

// Sidebar Component
class Sidebar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="${FLEX_CLASS} ${FLEX_COL_CLASS} ${MD_FLEX_ROW_CLASS} ${GAP_4_CLASS} custom-sidebar">
                <div class="${W_1_5_CLASS} ${H_SCREEN_CLASS} ${MD_H_SCREEN_CLASS} ${FLEX_CLASS} ${ITEMS_CENTER_CLASS} ${JUSTIFY_CENTER_CLASS} ${BG_GRAY_CLASS} ${TEXT_WHITE_CLASS} ${PADDING_8_CLASS} ${BORDER_R_CLASS} ${BORDER_GRAY_700_CLASS} ${FLEX_ROW_CLASS} ${MD_HIDDEN_CLASS}">
                    <div class="${W_1_5_CLASS} ${MD_W_1_5_CLASS} ${H_1_2_SCREEN_CLASS} ${MD_H_SCREEN_CLASS} ${FLEX_CLASS} ${ITEMS_CENTER_CLASS} ${JUSTIFY_CENTER_CLASS}">
                        <img src="Picture1.png" alt="Office Meeting" class="${OBJECT_CONTAIN_CLASS} ${W_FULL_CLASS} ${H_FULL_CLASS} ${RING_4_CLASS} ${BORDER_BLACK_CLASS}">
                    </div>

                    <div class="${W_FULL_CLASS} ${MD_W_1_2_CLASS} ${H_1_2_SCREEN_CLASS} ${MD_H_SCREEN_CLASS} ${FLEX_CLASS} ${ITEMS_CENTER_CLASS} ${JUSTIFY_CENTER_CLASS} ${BG_BLACK_CLASS} ${TEXT_WHITE_CLASS} ${PADDING_8_CLASS}">
                        <div class="${W_FULL_CLASS} ${BORDER_2_CLASS} ${BORDER_WHITE_CLASS} ${ROUNDED_LG_CLASS} ${RING_4_CLASS} ${RING_WHITE_CLASS} ${RING_OPACITY_50_CLASS} ${P_6_CLASS}">
                            <h2 class="${TEXT_3XL_CLASS} ${FONT_BOLD_CLASS} mb-4 custom-text">Fortified, multi-layered encryption unique to your organization</h2>
                            <p class="${TEXT_LG_CLASS}">
                                We have taken extreme care in designing our encryption systems to protect your most sensitive data. Any financial reports you upload to Digits are uniquely secured for your organization using per-secret, authenticated envelope encryption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('sidebar-element', Sidebar);
