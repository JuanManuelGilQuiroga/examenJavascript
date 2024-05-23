import { LitElement,html,css } from "lit";
import { getMoviesById } from "./data";

export class Movie extends LitElement{

    static properties = {
        peliculas: {type: Array},
        tipoSection: {type: String}
    }

    constructor(){
        super()
        this.tipoSection = localStorage.getItem("tiposection")
    }

    async encontrarPeliculas(){
        this.peliculas = await getMoviesById();
    }

    buscarPelicula(pelicula){
        getMoviesById(pelicula) 
    }

    connectedCallback() {
        super.connectedCallback();
        this.encontrarPeliculas();
    }

    static styles = css`
    main .info-data .card {
        padding: 20px;
        border-radius: 10px;
        background: var(--light);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .05);
    }
    main .card .head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    main .card .head h2 {
        font-size: 24px;
        font-weight: 600;
    }
    main .card .head p {
        font-size: 14px;
    }
    main .card .head .icon {
        font-size: 20px;
        color: var(--green);
    }
    main .card .head .icon.down {
        color: var(--red);
    }
    main .card .progress {
        display: block;
        margin-top: 24px;
        height: 10px;
        width: 100%;
        border-radius: 10px;
        background: var(--grey);
        overflow-y: hidden;
        position: relative;
        margin-bottom: 4px;
    }
    main .card .progress::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--blue);
        width: var(--value);
    }
    main .card .label {
        font-size: 14px;
        font-weight: 700;
    }
    `
    
    render(){
        return html`
        ${this.tipoSection == "buscar" ? html`<input class="buscador" type:"text" ><i class='bx bx-search' @click="${this.buscarPelicula(this.shadowRoot.querySelectorAll('.buscador').value)}"></i>`: ""}
        
        <div class="card">
            <div class="head">
                <div>
                    <h2>235</h2>
                    <p>Visitors</p>
                </div>
                <i class='bx bx-trending-up icon' ></i>
            </div>
            <span class="progress" data-value="80%"></span>
            <span class="label">80%</span>
        </div>
        `
    }
}
customElements.define("my-movie", Movie)