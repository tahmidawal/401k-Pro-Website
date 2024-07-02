import streamlit.components.v1 as components
import streamlit as st

# Shared Tailwind CSS classes
FLEX_CENTER = "flex justify-center items-center"
FLEX_SPACE = "flex items-center space-x-2"
MARGIN_TOP = "mt-8"
TEXT_COLOR = "text-muted-foreground"
FONT_SEMIBOLD = "font-semibold"
SPACE_Y = "space-y-2"


def streamlit_component():

    # Make this a sidebar
    with st.sidebar:
        st.markdown(
            """
            <style>
                .bg-card {
                    background-color: #f9fafb;
                }
                .text-card-foreground {
                    color: #1f2937;
                }
                .text-muted-foreground {
                    color: #6b7280;
                }
            </style>
            """, unsafe_allow_html=True)

        st.markdown('<div class="w-64 h-screen bg-card text-card-foreground p-4">',
                    unsafe_allow_html=True)

        st.markdown('<div class="{}">'.format(
            FLEX_CENTER), unsafe_allow_html=True)
        st.markdown(
            '<img aria-hidden="true" alt="dashboard-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🗂" />', unsafe_allow_html=True)
        st.markdown(
            '<img aria-hidden="true" alt="edit-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✏️" />', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('<div class="{}">'.format(SPACE_Y), unsafe_allow_html=True)
        st.markdown('<div class="{}">'.format(
            FLEX_SPACE), unsafe_allow_html=True)
        st.markdown('<img aria-hidden="true" alt="ChatGPT" src="https://openui.fly.dev/openui/24x24.svg?text=🤖" />',
                    unsafe_allow_html=True)
        st.markdown('<span>ChatGPT</span>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('<div class="{}">'.format(
            FLEX_SPACE), unsafe_allow_html=True)
        st.markdown('<img aria-hidden="true" alt="Python" src="https://openui.fly.dev/openui/24x24.svg?text=🐍" />',
                    unsafe_allow_html=True)
        st.markdown('<span>Python</span>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('<div class="{}">'.format(
            FLEX_SPACE), unsafe_allow_html=True)
        st.markdown(
            '<img aria-hidden="true" alt="Explore GPTs" src="https://openui.fly.dev/openui/24x24.svg?text=🔍" />', unsafe_allow_html=True)
        st.markdown('<span>Explore GPTs</span>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('<div class="{}">'.format(
            MARGIN_TOP), unsafe_allow_html=True)
        st.markdown('<h2 class="{} {} mb-2">Today</h2>'.format(TEXT_COLOR,
                    FONT_SEMIBOLD), unsafe_allow_html=True)
        st.markdown('<ul class="{}">'.format(SPACE_Y), unsafe_allow_html=True)
        st.markdown('<li>Web Component Integration Guide</li>',
                    unsafe_allow_html=True)
        st.markdown('<li>Adjust Banner Heights</li>', unsafe_allow_html=True)
        st.markdown('<li>401k Pro Marketing Guide</li>',
                    unsafe_allow_html=True)
        st.markdown('<li>Protect Marble Countertops</li>',
                    unsafe_allow_html=True)
        st.markdown('</ul>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('<div class="{}">'.format(
            MARGIN_TOP), unsafe_allow_html=True)
        st.markdown('<h2 class="{} {} mb-2">Yesterday</h2>'.format(TEXT_COLOR,
                    FONT_SEMIBOLD), unsafe_allow_html=True)
        st.markdown('<ul class="{}">'.format(SPACE_Y), unsafe_allow_html=True)
        st.markdown('<li>Folder Suggestions for Project</li>',
                    unsafe_allow_html=True)
        st.markdown('<li>User Requests Next Steps</li>',
                    unsafe_allow_html=True)
        st.markdown('<li>Improve 401k Pro logo</li>', unsafe_allow_html=True)
        st.markdown('</ul>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('<div class="{}">'.format(
            MARGIN_TOP), unsafe_allow_html=True)
        st.markdown('<h2 class="{} {} mb-2">Previous 7 Days</h2>'.format(TEXT_COLOR,
                    FONT_SEMIBOLD), unsafe_allow_html=True)
        st.markdown('<div class="{}">'.format(
            FLEX_SPACE), unsafe_allow_html=True)
        st.markdown(
            '<img aria-hidden="true" alt="Add Team workspace" src="https://openui.fly.dev/openui/24x24.svg?text=✨" />', unsafe_allow_html=True)
        st.markdown('<div>', unsafe_allow_html=True)
        st.markdown('<span>Add Team workspace</span>', unsafe_allow_html=True)
        st.markdown('<p class="text-sm {}">Collaborate on a Team plan</p>'.format(
            TEXT_COLOR), unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('</div>', unsafe_allow_html=True)

        st.markdown('</div>', unsafe_allow_html=True)


# Shared tailwind classes
BUTTON_CLASSES = "bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-full shadow-lg"


def streamlit_button(label):
    button_html = f'<button class="{BUTTON_CLASSES}">{label}</button>'
    components.html(button_html)


# Usage
st.write("Custom Button Component")
streamlit_button("BUTTON")

streamlit_component()
