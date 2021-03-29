import * as React from "react";
// import { AuthImage } from "./AuthImage";
import { SchemaView } from "./AuthPanel";
import * as styles from "./styles/index.less";

export const AuthPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <SchemaView />
        </div>
    )
}