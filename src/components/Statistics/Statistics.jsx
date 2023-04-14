import React from 'react';
import { Item, Section, StatList, Title } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map((stat, idx) => {
          return (
            <Item key={stat.id} index={idx}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
