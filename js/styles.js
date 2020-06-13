class SideBar {
    static state = false;
    constructor() {
        this.sideBar = document.getElementById('side-bar');
        this.sideBarToggler = document.getElementById('toggle-sidebar');
        this.content = document.getElementById('content');
        this.chevron = document.getElementById('chevron');
        this.overlay = document.getElementById('overlay');
        this.addListeners();
    }
    addListeners() {
        this.sideBarToggler.addEventListener('click', this.toggleSideBar.bind(this))
        this.overlay.addEventListener('click', this.toggleSideBar.bind(this))
    }
    toggleSideBar() {  
        switch (SideBar.state) {
            case true:
                this.sideBar.classList.remove('w-64','rounded-r-lg');
                this.overlay.classList.remove('w-full', 'opacity-50');
                this.chevron.classList.add('rotate-180');
                this.sideBarToggler.classList.remove('left-64');
                break;
            default:
                this.sideBar.classList.add('w-64', 'rounded-r-lg');
                this.overlay.classList.add('w-full', 'opacity-50');
                this.sideBarToggler.classList.add('left-64');
                this.chevron.classList.remove('rotate-180');
                break;
        }  
        SideBar.state = !SideBar.state; 
    }
}
class NavBar {
    static searchInputState = false;
    static menuState = false
    constructor() {
        this.searchBox = document.getElementById('search');
        this.menuBox = document.getElementById('menu');
        this.menuToggler = document.getElementById('toggle-menu');
        this.searchToggler = document.getElementById('toggle-search');
        this.addListeners();
    }
    addListeners() {
        this.menuToggler.addEventListener('click', this.toggleMenu.bind(this));
        this.searchToggler.addEventListener('click', this.toggleSearch.bind(this));
    }
    toggleMenu() {
        switch (NavBar.menuState) {
            case true:
                this.menuBox.classList.remove('p-2');
                this.menuBox.classList.remove('h-32');
                NavBar.menuState = !NavBar.menuState;
                break;
            default:
                this.menuBox.classList.add('h-32');
                this.menuBox.classList.add('p-2');
                NavBar.menuState = !NavBar.menuState;
                break;
        }
    }
    toggleSearch() {
        const buttons = this.searchToggler.getElementsByTagName('svg');
        switch (NavBar.searchInputState) {
            case true:
                this.searchBox.classList.remove('w-48');
                this.searchBox.classList.remove('px-2');
                buttons[0].classList.remove('hidden');
                buttons[1].classList.add('hidden');
                NavBar.searchInputState = !NavBar.searchInputState;
                break;
            default:
                this.searchBox.classList.add('w-48');
                this.searchBox.classList.add('px-2');
                buttons[0].classList.add('hidden');
                buttons[1].classList.remove('hidden');
                NavBar.searchInputState = !NavBar.searchInputState;
                break;
        }
    }
}
window.addEventListener('DOMContentLoaded', () => {
   new SideBar();
   new NavBar();
})