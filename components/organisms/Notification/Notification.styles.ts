import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface INotificationMessage {
  isRead?: boolean;
}

const ReadNotificationStyle = () => css`
  color: #bebebe;
`;

export const NotificationIcon = styled.div`
  position: relative;

  cursor: pointer;
`;

export const NotificationMessage = styled.li<INotificationMessage>`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(191, 191, 191, 0.3);

  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.4;

  overflow-x: hidden;

  cursor: pointer;

  :hover {
    background-color: rgba(191, 191, 191, 0.3);
  }

  ${({ isRead }) => {
    if (isRead) return ReadNotificationStyle;
    return null;
  }};
`;

export const StrongAndEllipsis = styled.span`
  display: inline-block;

  font-weight: bold;
  white-space: pre-wrap;
`;
