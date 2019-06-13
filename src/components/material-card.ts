import { css, customElement, html, LitElement, TemplateResult, CSSResultArray } from 'lit-element';

@customElement('material-card')
export class MaterialCard extends LitElement {
    static get styles(): CSSResultArray {
        return [
            css`
                .my-card-content {
                    padding: 16px;
                }
            `
        ];
    }

    constructor() {
        super();

        this.addEventListener('rendered', async (e) => {
            console.log('redered event')
            try {
              await this.updateComplete;
              console.log(this.shadowRoot.querySelector(".mdc-card__actions"))
              this.shadowRoot.querySelector(".mdc-card__actions").setAttribute('class', 'test');
            } catch (err) {
              console.error('FUCK');
            }
          });
          this.dispatchEvent(new CustomEvent('rendered'));
    }

    public render(): TemplateResult {
        return html`
            <div class="mdc-card">
                <div class="mdc-card__primary-action">
                    <div class="mdc-card__media mdc-card__media--square">
                        <div class="mdc-card__media-content">Title</div>
                    </div>
                    <!-- ... additional primary action content ... -->
                </div>
                <div class="mdc-card__actions">
                    <div class="mdc-card__action-buttons">
                        <button class="mdc-button mdc-card__action mdc-card__action--button">
                            <span class="mdc-button__label">Action 1</span>
                        </button>
                        <button class="mdc-button mdc-card__action mdc-card__action--button" @click="${() => this.doClick()}">
                            <span class="mdc-button__label">Action 2</span>
                        </button>
                    </div>
                    <div class="mdc-card__action-icons">
                        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
                        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
                    </div>
                </div>
            </div>
        `;
    }

    doClick(): void {
        console.log('do click');
        console.log('do it', this.shadowRoot.querySelector(".mdc-card__actions"));
    }

    getClasses(): string {
        return "test";
    }
}
