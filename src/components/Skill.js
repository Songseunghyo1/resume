import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Card } from './component';

const renderItems = (item, index) => (
    <li key={index}>
        {item}
    </li>
)

const Skill = ({skills = []}) => {
    return (
        <Card className="skill">
            <Fragment>
                <h2>Skills</h2>
                <ul>
                    {skills.map(renderItems)}
                </ul>
            </Fragment>
        </Card>
    );
}

Skill.propTypes = {
    skills: PropTypes.array,
}

export default Skill;