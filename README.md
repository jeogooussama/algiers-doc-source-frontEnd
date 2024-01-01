**Schema**

**
App
├── BrowserRouter
│   └── Routes
│       ├── Route (path="/")
│       │   └── Home
│       │       ├── Navbar
│       │       ├── HeroArea
│       │       ├── Usage
│       │       ├── SearchBar
│       │       └── Footer
│       ├── Route (path="/interfaces")
│       │   └── InterFaces
│       │       ├── Navbar
│       │       ├── SearchBar
│       │       └── InterfacesContainer
│       │           └── InterfaceCard
│       ├── Route (path="/interface/:id")
│       │   └── InterfaceDetailsPage
│       │       ├── Navbar
│       │       ├── InterfaceDetails
│       │       └── Footer
│       └── ...
├── Home
│   ├── Navbar
│   ├── HeroArea
│   ├── Usage
│   ├── SearchBar
│   └── Footer
├── Navbar
│   └── Drawer
│       └── List
│           ├── ListItem (Home)
│           ├── ListItem (Interfaces)
│           ├── ListItem (About Us)
│           ├── ListItem (Contact Us)
│           └── ...
├── HeroArea
│   ├── Container
│   │   └── Grid
│   │       ├── Grid (Text and Buttons)
│   │       └── Grid (Image)
│   └── ...
├── Usage
│   ├── Container
│   │   └── Box
│   │       └── Card
│   │           ├── IconButton
│   │           ├── Typography
│   │           └── ...
│   └── ...
├── SearchBar
│   └── Container
│       └── Box
│           ├── FormControl (Language)
│           ├── FormControl (Wilaya)
│           ├── Autocomplete (Search)
│           └── ...
└── Footer
    └── Grid
        ├── Grid (Contact Information)
        ├── Grid (Social Media Links)
        ├── Grid (Navigation Links)
        └── Typography (Copyright)
**
