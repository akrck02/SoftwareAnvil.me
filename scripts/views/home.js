import { BubbleUI } from "../lib/bubble.js";
import { getConfiguration } from "../lib/configuration.js";
import { setDomEvents, uiComponent } from "../lib/dom.js";
import { Html } from "../lib/html.js";
import { Theme } from "../services/theme.js";
class HomeView {
    /**
     * Show home view
     */
    static async show(parameters, container) {
        const view = uiComponent({
            type: Html.View,
            id: HomeView.VIEW_ID,
            classes: [BubbleUI.BoxColumn, BubbleUI.BoxCenter],
        });
        const title = uiComponent({
            type: Html.H1,
            text: getConfiguration("base")["app_name"],
            styles: {
                fontSize: "5rem",
                marginBottom: "3rem",
            },
            selectable: false,
        });
        // Este hace toggle del tema
        // setDomEvents(view, {
        //   click: (e) => {
        //     Theme.toggle();
        //   },
        // });
        const description = uiComponent({
            type: Html.P,
            text: "my personal website.",
            selectable: false,
        });
        const button = uiComponent({
            type: Html.Button,
            text: "Clicker",
        });
        setDomEvents(button, {
            click: (e) => {
                Theme.toggle();
            },
        });
        view.appendChild(title);
        view.appendChild(description);
        view.appendChild(button);
        container.appendChild(view);
    }
}
// HTML ids and classes
HomeView.VIEW_ID = "home";
export default HomeView;
