import { LitElement,html,css } from "lit";

export class Movie extends LitElement{

    static properties = {

    }

    constructor(){
        super()
    }

    static styles = css`
    
    `
    
    render(){
        return html`
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