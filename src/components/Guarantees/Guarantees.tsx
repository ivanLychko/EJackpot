import * as React from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

class Guarantees extends React.PureComponent<WithTranslation> {
    render() {
        return <section className="case-rookie">
            <h2 className="case-rookie__header">{this.props.t("guarantees")}</h2>
            <div style={{paddingLeft: "15px"}}>
                <p>{this.props.t("why-trust")}</p>
                <ol>
                    <li>{this.props.t("smart-contract")}</li>
                    <li>{this.props.t("ethereum")}</li>
                    <li>{this.props.t("no-influence")}</li>
                    <li>{this.props.t("no-register")}</li>
                    <li>{this.props.t("no-private-keys")}</li>
                    <li>{this.props.t("100-withdrawal")}</li>
                </ol>
                <p>{this.props.t("smart-contract-link")} — <a href=""></a></p>
                <p>{this.props.t("github")} — <a href=""></a></p>
            </div>
        </section>
    }
}

export default withTranslation()(Guarantees);