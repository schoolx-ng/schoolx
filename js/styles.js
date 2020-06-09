class SideBar {
    static state = false;
    constructor() {
        this.sideBar = document.getElementById('side-bar');
        this.sideBarToggler = document.getElementById('toggle-sidebar');
        this.content = document.getElementById('content');
        this.chevron = document.getElementById('chevron');
        this.addListeners();
    }
    addListeners() {
        this.sideBarToggler.addEventListener('click', this.toggleSideBar.bind(this))
    }
    toggleSideBar() {  
        switch (SideBar.state) {
            case true:
                this.sideBar.classList.remove('w-64','rounded-r-lg');
                this.chevron.classList.add('rotate-180');
                this.sideBarToggler.classList.remove('left-64');
                break;
            default:
                this.sideBar.classList.add('w-64', 'rounded-r-lg');
                this.sideBarToggler.classList.add('left-64');
                this.chevron.classList.remove('rotate-180');
                break;
        }  
        SideBar.state = !SideBar.state; 
    }
}

window.addEventListener('DOMContentLoaded', () => {
   new SideBar();
})