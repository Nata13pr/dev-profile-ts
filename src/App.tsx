import React, {FC} from "react";

import "./index.css";
import Avatar from "./components/Avatar/Avatar.tsx";
import Intro from "./components/Intro/Intro.tsx";
import SkillList from "./components/SkillList/SkillList.tsx";

const App: FC = () => {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
                <SkillList/>
            </div>
        </div>
    );
}

export default App;
