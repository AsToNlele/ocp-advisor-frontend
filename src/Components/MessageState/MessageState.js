import { EmptyStateVariant } from '@patternfly/react-core/dist/js/components/EmptyState/EmptyState';

import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';
import {
  EmptyStateIcon,
  EmptyStateBody,
  EmptyState,
  Title,
} from '@patternfly/react-core';
import PropTypes from 'prop-types';
import React from 'react';

const MessageState = ({
  className,
  children,
  icon,
  iconClass,
  iconStyle,
  text,
  title,
  variant,
}) => (
  <EmptyState className={className} variant={variant}>
    {icon !== 'none' && (
      <EmptyStateIcon className={iconClass} style={iconStyle} icon={icon} />
    )}
    <Title headingLevel="h5" size="lg">
      {title}
    </Title>
    <EmptyStateBody style={{ marginBottom: '16px' }}>{text}</EmptyStateBody>
    {children}
  </EmptyState>
);

MessageState.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
  iconClass: PropTypes.any,
  iconStyle: PropTypes.any,
  text: PropTypes.any,
  title: PropTypes.string,
  variant: PropTypes.any,
  className: PropTypes.string,
};

MessageState.defaultProps = {
  icon: CubesIcon,
  title: '',
  variant: EmptyStateVariant.full,
};

export default MessageState;
