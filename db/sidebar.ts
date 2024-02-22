import { iSidebarItem } from "@type/component/Sidebar.d";
import { FaAlignJustify, FaAndroid, FaBell, FaCamera, FaDatabase, FaEye, FaFirefox, FaGoogle, FaHome, FaImage, FaJava, FaJs, FaMedapps, FaPaintBrush, FaPhp, FaSearch, FaTextHeight, FaUser, FaVideo } from "react-icons/fa";

const sidebar: Array<iSidebarItem> = [
    {
        name: "Introduction",
        href: "/introduction",
        icon: FaHome,
    },
    {
        name: "Build Your First App",
        href: "/build-your-first-app",
        icon: FaAndroid,
    },
    {
        name: "Concept For Beginner",
        icon: FaMedapps,
        more: true,
        content: {
            name: "Concept For Beginner",
            list: [
                {
                    name: "Introduce",
                    href: "/-",
                    icon: FaHome,
                },
                {
                    name: "XML",
                    href: "/-",
                },
                {
                    name: "PHP",
                    href: "/-",
                    icon: FaPhp,
                },
                {
                    name: "MYSQL/SQLite",
                    href: "/-",
                },
                {
                    name: "JSON",
                    href: "/-",
                    icon: FaJava,
                },
                {
                    name: "JAVA",
                    href: "/-",
                },
                {
                    name: "JAVASCRIPT",
                    href: "/-",
                    icon: FaJs,
                },
            ],
        },
    },
    {
        name: "User Activities",
        icon: FaUser,
        more: true,
        content: {
            name: "User Activities",
            list: [
                {
                    name: "Intent",
                    href: "/-",
                },
                {
                    name: "Dialog",
                    href: "/-",
                },
                {
                    name: "Navigation Action Bar",
                    href: "/-",
                    icon: FaAlignJustify,
                },
                {
                    name: "Top Sheet",
                    href: "/-",
                    icon: FaDatabase,
                },
                {
                    name: "Bottom Sheet",
                    href: "/-",
                    icon: FaDatabase,
                },
                {
                    name: "Screen Overlay",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "Works with Views",
        icon: FaAlignJustify,
        more: true,
        content: {
            name: "Works with Views",
            dropdown: [
                {
                    name: "Basic Views",
                    icon: FaAlignJustify,
                    more: true,
                    content: [
                        {
                            name: "Text View",
                            href: "/-",
                            icon: FaTextHeight,
                        },
                        {
                            name: "Image View",
                            href: "/-",
                            icon: FaImage,
                        },
                        {
                            name: "Button",
                            href: "/-",
                        },
                        {
                            name: "Image Button",
                            href: "/-",
                        },
                        {
                            name: "Switch",
                            href: "/-",
                        },
                        {
                            name: "Toggle Button",
                            href: "/-",
                        },
                        {
                            name: "Check Box",
                            href: "/-",
                        },
                        {
                            name: "Edit Text",
                            href: "/-",
                            icon: FaPaintBrush
                        },
                        {
                            name: "Spinner",
                            href: "/-",
                        },
                        {
                            name: "Seek Bar",
                            href: "/-",
                        },
                        {
                            name: "Progress Bar",
                            href: "/-",
                        },
                        {
                            name: "Radio Group",
                            href: "/-",
                        },
                        {
                            name: "Video View",
                            href: "/-",
                            icon: FaVideo,
                        },
                        {
                            name: "Table View",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Parent Views",
                    icon: FaAlignJustify,
                    more: true,
                    content: [
                        {
                            name: "Linear Layout",
                            href: "/-",
                        },
                        {
                            name: "Relative Layout",
                            href: "/-",
                        },
                        {
                            name: "Frame Layout",
                            href: "/-",
                        },
                        {
                            name: "Card View",
                            href: "/-",
                        },
                        {
                            name: "Scroll View",
                            href: "/-",
                        },
                        {
                            name: "Horizontal Scroll View",
                            href: "/-",
                        },
                        {
                            name: "Swipe Refresh Layout",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Widget Views",
                    more: true,
                    content: [
                        {
                            name: "Slider Image View",
                            href: "/-",
                        },
                        {
                            name: "Image Viewer View",
                            href: "/-",
                            icon: FaImage
                        },
                        {
                            name: "Image Picker View",
                            href: "/-",
                        },
                        {
                            name: "Popup Menu",
                            href: "/-",
                        },
                        {
                            name: "Circle Menu",
                            href: "/-",
                        },
                        {
                            name: "Expandable Menu",
                            href: "/-",
                        },
                        {
                            name: "Expandable FAB",
                            href: "/-",
                        },
                        {
                            name: "Pager View",
                            href: "/-",
                        },
                        {
                            name: "Tab View",
                            href: "/-",
                        },
                        {
                            name: "Rating View",
                            href: "/-",
                        },
                        {
                            name: "Rating Review",
                            href: "/-",
                        },
                        {
                            name: "Tool Bar",
                            href: "/-",
                        },
                        {
                            name: "Search Bar",
                            href: "/-",
                            icon: FaSearch
                        },
                        {
                            name: "Guage View",
                            href: "/-",
                        },
                        {
                            name: "Loading Indicator",
                            href: "/-",
                        },
                        {
                            name: "360 View",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Recycler View",
                    href: "/-",
                    icon: FaAlignJustify,
                    more: true,
                    content: [
                        {
                            name: "Recycler View",
                            href: "/-",
                        },
                        {
                            name: "Adapter",
                            href: "/-",
                        },
                        {
                            name: "Layout Manager",
                            href: "/-",
                        },
                        {
                            name: "Fast Scroll",
                            href: "/-",
                        },
                        {
                            name: "Several Samples",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Web View",
                    icon: FaFirefox,
                    more: true,
                    content: [
                        {
                            name: "Web View",
                            href: "/-",
                        },
                        {
                            name: "Offline View Options",
                            href: "/-",
                        },
                        {
                            name: "Navigation Controller",
                            href: "/-",
                        },
                        {
                            name: "Url Bar",
                            href: "/-",
                        },
                        {
                            name: "JS Interface",
                            href: "/-",
                            icon: FaJs
                        },
                        {
                            name: "Web RTC",
                            href: "/-",
                        },
                        {
                            name: "Website to App",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Dragging",
                    href: "/dragging",
                },
            ],
        },
    },
    {
        name: "Activity Behavior",
        more: true,
        content: {
            name: "Activity Behavior",
            list: [
                {
                    name: "Toast",
                    href: "/-",
                },
                {
                    name: "Snack Bar",
                    href: "/-",
                },
                {
                    name: "Notification",
                    href: "/-",
                    icon: FaBell
                },
                {
                    name: "Play Sound",
                    href: "/-",
                },
                {
                    name: "Speak Text",
                    href: "/-",
                },
                {
                    name: "Make Vibration",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "Dialogs",
        more: true,
        content: {
            name: "Dialogs",
            dropdown: [
                {
                    name: "Basic Dialogs",
                    more: true,
                    content: [
                        {
                            name: "Alert Dialog",
                            href: "/-",
                        },
                        {
                            name: "Progress Dialog",
                            href: "/-",
                        },
                        {
                            name: "Spot Progress Dialog",
                            href: "/-",
                        },
                        {
                            name: "Input Dialog",
                            href: "/-",
                        },
                        {
                            name: "Chooser Dialog",
                            href: "/-",
                        },
                        {
                            name: "Multiple Selectable Dialog",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Picker Dialogs",
                    more: true,
                    content: [
                        {
                            name: "Country Code Picker",
                            href: "/-",
                        },
                        {
                            name: "Image Picker",
                            href: "/-",
                        },
                        {
                            name: "File Picker",
                            href: "/-",
                        },
                        {
                            name: "Color Picker",
                            href: "/-",
                        },
                        {
                            name: "Date Picker",
                            href: "/-",
                        },
                        {
                            name: "Time Picker",
                            href: "/-",
                        },
                        {
                            name: "Slide Date Picker",
                            href: "/-",
                        },
                        {
                            name: "Slide Time Picker",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Special Dialogs",
                    more: true,
                    content: [
                        {
                            name: "Speech To Text",
                            href: "/-",
                            icon: FaTextHeight
                        },
                        {
                            name: "Biometric Auth",
                            href: "/-",
                        },
                        {
                            name: "Pdf Viewer",
                            href: "/-",
                        },
                        {
                            name: "Image Viewer",
                            href: "/-",
                            icon: FaImage
                        },
                        {
                            name: "Camera Viewer",
                            href: "/-",
                            icon: FaCamera
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Graphics",
        icon: FaImage,
        more: true,
        content: {
            name: "Graphics",
            list: [
                {
                    name: "Color",
                    href: "/-",
                    icon: FaEye
                },
                {
                    name: "Gradient",
                    href: "/-",
                },
                {
                    name: "icon",
                    href: "/-",
                },
                {
                    name: "Barcode",
                    href: "/-",
                },
                {
                    name: "Thumbnail",
                    href: "/-",
                },
                {
                    name: "On-Touch Style",
                    href: "/-",
                },
                {
                    name: "Gradient Animation",
                    href: "/-",
                },
                {
                    name: "Transition Animation",
                    href: "/-",
                },
                {
                    name: "Splash View",
                    href: "/-",
                },
                {
                    name: "Bitmap Editing",
                    href: "/-",
                },
                {
                    name: "Canvas",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "User's Information",
        icon:FaUser,
        more: true,
        content: {
            name: "User's Information",
            dropdown: [
                {
                    name: "Contact List",
                    href: "/-",
                },
                {
                    name: "SMS/MMS",
                    href: "/-",
                },
                {
                    name: "Call Log",
                    href: "/-",
                },
                {
                    name: "Calender",
                    href: "/-",
                },
                {
                    name: "Phone Call",
                    href: "/-",
                },
                {
                    name: "Microphone",
                    href: "/-",
                },
                {
                    name: "Camera",
                    href: "/-",
                },
                {
                    name: "Screen Projection",
                    href: "/-",
                },
                {
                    name: "Sensors",
                    href: "/-",
                },
                {
                    name: "Location",
                    href: "/-",
                },
                {
                    name: "Device Info",
                    href: "/-",
                },
                {
                    name: "Connectivity Usage",
                    href: "/-",
                    more: true,
                    content: [
                        {
                            name: "Bluetooth",
                            href: "/-",
                        },
                        {
                            name: "WiFi",
                            href: "/-",
                        },
                        {
                            name: "NFC",
                            href: "/-",
                        },
                        {
                            name: "Infrared",
                            href: "/-",
                        },
                        {
                            name: "IR",
                            href: "/-",
                        },
                        {
                            name: "USB",
                            href: "/-",
                        },
                        {
                            name: "Http",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Hardware Changes",
                    href: "/-",
                    more: true,
                    content: [
                        {
                            name: "Change Date-Time",
                            href: "/-",
                        },
                        {
                            name: "Bluetooth",
                            href: "/-",
                        },
                        {
                            name: "WiFi",
                            href: "/-",
                        },
                        {
                            name: "Flash Light",
                            href: "/-",
                        },
                        {
                            name: "Volume",
                            href: "/-",
                        },
                        {
                            name: "Display",
                            href: "/-",
                        },
                        {
                            name: "Key Simulate",
                            href: "/-",
                        },
                        {
                            name: "Touch Simulate",
                            href: "/-",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Database",
        icon: FaDatabase,
        more: true,
        content: {
            name: "Database",
            list: [
                {
                    name: "Shared Preference",
                    href: "/-",
                },
                {
                    name: "SQLite Database",
                    href: "/-",
                },
                {
                    name: "Temp Variables",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "Event Listeners",
        more: true,
        content: {
            name: "Event Listeners",
            list: [
                {
                    name: "Broadcast Receiver",
                    href: "/-",
                },
                {
                    name: "Key Event",
                    href: "/-",
                },
                {
                    name: "Touch Event",
                    href: "/-",
                },
                {
                    name: "Schedule Work",
                    href: "/-",
                },
                {
                    name: "Activity Event",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "File Options",
        more: true,
        content: {
            name: "File Options",
            list: [
                {
                    name: "Read / Write",
                    href: "/-",
                },
                {
                    name: "Copy / Move / Delete / Rename",
                    href: "/-",
                },
                {
                    name: "Zip / Unzip",
                    href: "/-",
                },
                {
                    name: "Encrypt / Decrypt",
                    href: "/-",
                },
                {
                    name: "Upload / Download",
                    href: "/-",
                },
                {
                    name: "Search",
                    href: "/-",
                    icon: FaSearch
                },
                {
                    name: "Print",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "App Settings",
        href: "/-",
    },
    {
        name: "External Intent",
        href: "/-",
    },
    {
        name: "Chip Board",
        href: "/-",
    },
    {
        name: "Device Admin",
        href: "/-",
    },
    {
        name: "Artificial Intelligences",
        more: true,
        content: {
            name: "Artificial Intelligences",
            list: [
                {
                    name: "Touch Gesture",
                    href: "/-",
                },
                {
                    name: "Sensor Gesture",
                    href: "/-",
                },
                {
                    name: "Face Recognition",
                    href: "/-",
                },
                {
                    name: "OCR",
                    href: "/-",
                },
                {
                    name: "Google Assistance",
                    href: "/-",
                    icon:FaGoogle
                },
            ],
        },
    },
    {
        name: "Object Oriented Program",
        more: true,
        content: {
            name: "Object Oriented Program",
            list: [
                {
                    name: "Condition",
                    href: "/-",
                },
                {
                    name: "Loop",
                    href: "/-",
                },
                {
                    name: "Math",
                    href: "/-",
                },
                {
                    name: "Unit Converter",
                    href: "/-",
                },
                {
                    name: "Data Encryption",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "3rd-Party Interactive",
        more: true,
        content: {
            name: "3rd-Party Interactive",
            dropdown: [
                {
                    name: "Google Service",
                    icon: FaGoogle,
                    more: true,
                    content: [
                        {
                            name: "Google Ad",
                            href: "/-",
                        },
                        {
                            name: "Google Translate",
                            href: "/-",
                        },
                        {
                            name: "Google Auth",
                            href: "/-",
                        },
                        {
                            name: "Google Drive",
                            href: "/-",
                        },
                        {
                            name: "Google Pay",
                            href: "/-",
                        },
                        {
                            name: "Google Map",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Firebase Service",
                    more: true,
                    content: [
                        {
                            name: "Firebase Auth",
                            href: "/-",
                        },
                        {
                            name: "Firebase Notification",
                            href: "/-",
                        },
                        {
                            name: "Realtime Database",
                            href: "/-",
                        },
                        {
                            name: "Firebase Cloud",
                            href: "/-",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Sample Projects",
        href: "/-",
    },
];

export default sidebar;
