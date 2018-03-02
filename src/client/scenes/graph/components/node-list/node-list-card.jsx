import React from 'react';
import PropTypes from 'prop-types';
import { NodeListFilters } from './node-list-filters';
import { NodeList } from './node-list';

export const NodeListCard = ({ fullGraph, filteredNodes, ...props }) => {
  if (!filteredNodes) return '';
  let { chains, testnet } = fullGraph;
  return (
    <div className="nodes-card card">
      <h3 className="card-header">{chains[0].toUpperCase() + (testnet ? ' - Testnet' : '')}</h3>
      <div className="card-body">
        <NodeListFilters nodes={filteredNodes} {...props} />
        <hr />
        <NodeList nodes={filteredNodes} {...props} />
      </div>
    </div>
  );
};

NodeListCard.propTypes = {
  filteredNodes: PropTypes.array,
};
