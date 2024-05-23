import { LitElement,html,css } from "lit";

export class Sidebar extends LitElement{

    static properties = {
        tipoSection: { type: String}
    }

    constructor(){
        super();
        this.tipoSection = localStorage.getItem("tiposection") || localStorage.setItem("tiposection","buscar")
    }

    ponerTipoSection(tipo){
        this.tipoSection = tipo;
        localStorage.setItem("tiposection", tipo)
        location.href ="/"
    }

    /*sideBarDropdown(e){
        const sideDropdown = this.shadowRoot.querySelectorAll('.side-dropdown');
        const aIcon = this.shadowRoot.querySelectorAll('#aIcon')
        if(!aIcon.classList.contains('active')) {
            sideDropdown.forEach(i=> {
                const aLink = i.parentElement.querySelector('a:first-child');

                aLink.classList.remove('active');
                i.classList.remove('show');
            })
            aIcon.classList.toggle('active');
            sideDropdown.classList.toggle('show');
        }

        /*const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
        allDropdown.forEach(item=> {
            const a = item.parentElement.querySelector('a:first-child');
            a.addEventListener('click', function (e) {
                e.preventDefault();

                if(!this.classList.contains('active')) {
                    allDropdown.forEach(i=> {
                        const aLink = i.parentElement.querySelector('a:first-child');

                        aLink.classList.remove('active');
                        i.classList.remove('show');
                    })
                }

                this.classList.toggle('active');
                item.classList.toggle('show');
            })
        })
    }*/

    static styles = css`
    #sidebar {
        position: fixed;
        max-width: 260px;
        width: 100%;
        background: var(--light);
        top: 0;
        left: 0;
        height: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        transition: all .3s ease;
        z-index: 200;
        overflow: scroll;
    }
    #sidebar.hide {
        max-width: 60px;
    }
    #sidebar.hide:hover {
        max-width: 260px;
    }
    #sidebar::-webkit-scrollbar {
        display: none;
    }
    #sidebar .brand {
        font-size: 24px;
        display: flex;
        align-items: center;
        height: 64px;
        font-weight: 700;
        color: var(--blue);
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
        background: var(--light);
        transition: all .3s ease;
        padding: 0 6px;
    }
    #sidebar .icon {
        min-width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
    }
    #sidebar .icon-right {
        margin-left: auto;
        transition: all .3s ease;
    }
    #sidebar .side-menu {
        margin: 36px 0;
        padding: 0 20px;
        transition: all .3s ease;
    }
    #sidebar.hide .side-menu {
        padding: 0 6px;
    }
    #sidebar.hide:hover .side-menu {
        padding: 0 20px;
    }
    #sidebar .side-menu a {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--dark);
        padding: 12px 16px 12px 0;
        transition: all .3s ease;
        border-radius: 10px;
        margin: 4px 0;
        white-space: nowrap;
    }
    #sidebar .side-menu > li > a:hover {
        background: var(--grey);
    }
    #sidebar .side-menu > li > a.active .icon-right {
        transform: rotateZ(90deg);
    }
    #sidebar .side-menu > li > a.active,
    #sidebar .side-menu > li > a.active:hover {
        background: var(--blue);
        color: var(--light);
    }
    #sidebar .divider {
        margin-top: 24px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--dark-grey);
        transition: all .3s ease;
        white-space: nowrap;
    }
    #sidebar.hide:hover .divider {
        text-align: left;
    }
    #sidebar.hide .divider {
        text-align: center;
    }
    #sidebar .side-dropdown {
        padding-left: 54px;
        max-height: 0;
        overflow-y: hidden;
        transition: all .15s ease;
    }
    #sidebar .side-dropdown.show {
        max-height: 1000px;
    }
    #sidebar .side-dropdown a:hover {
        color: var(--blue);
    }
    #sidebar .ads {
        width: 100%;
        padding: 20px;
    }
    #sidebar.hide .ads {
        display: none;
    }
    #sidebar.hide:hover .ads {
        display: block;
    }
    #sidebar .ads .wrapper {
        background: var(--grey);
        padding: 20px;
        border-radius: 10px;
    }
    #sidebar .btn-upgrade {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 0;
        color: var(--light);
        background: var(--blue);
        transition: all .3s ease;
        border-radius: 5px;
        font-weight: 600;
        margin-bottom: 12px;
    }
    #sidebar .btn-upgrade:hover {
        background: var(--dark-blue);
    }
    #sidebar .ads .wrapper p {
        font-size: 12px;
        color: var(--dark-grey);
        text-align: center;
    }
    #sidebar .ads .wrapper p span {
        font-weight: 700;
    }
    `
    
    render(){
        return html`
        <section id="sidebar">
            <a href="#" class="brand"><i class='bx bxs-smile icon'></i> AdminSite</a>
            <ul class="side-menu">
                <li><a href="#" class="active"><i class='bx bxs-dashboard icon' ></i> Dashboard</a></li>
                <li class="divider" data-text="main">Main</li>
                <li><a href="#" id="aIcon" @click="${this.sideBarDropdown("")}"><i class='bx bxs-inbox icon' ></i> Elements</a></li>
                <li><a href="#" @click="${this.sideBarDropdown()}"><i class='bx bxs-chart icon' ></i> Charts</a></li>
                <li class="divider" data-text="table and forms">Table and forms</li>
                <li><a href="#" @click="${this.sideBarDropdown()}"><i class='bx bx-table icon' ></i> Tables</a></li>
                <li><a href="#" @click="${this.sideBarDropdown()}"><i class='bx bxs-notepad icon' ></i> Forms</a>
                </li>><a href="#" @click="${this.sideBarDropdown()}"><i class='bx bxs-widget icon' ></i> Widgets</a></li>
            </ul>
	    </section>
        `
    }
}
customElements.define("side-bar", Sidebar)