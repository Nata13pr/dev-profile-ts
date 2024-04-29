import React, {FC, ReactNode} from 'react';

interface IProps {
    color: string,
    skill: string,
    emoji:string
}

type SkillComponentWithChildren<T>=T
&{children?:ReactNode}

const Skill: FC<SkillComponentWithChildren<IProps>> = ({color, skill, emoji}) => {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>{emoji}</span>
        </div>
    );
}

export default Skill;