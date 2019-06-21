// import react library
import React from 'react';
// import third pary libraries
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';

// import components
import Settings from 'components/Profile/Settings';
import Bookmarks from 'components/Profile/Bookmarks';
import Articles from 'components/Profile/Articles';

// import styles
import './Profile.scss';

export const ProfileMain = ({ match: { params: { profileUser } }, authenticatedUser }) => {
  const panes = [
    { menuItem: 'Articles ', render: () => <Tab.Pane attached><Articles /></Tab.Pane> },
    { menuItem: ' | Bookmarks ', render: () => <Tab.Pane attached><Bookmarks /></Tab.Pane> },
  ];
  if (authenticatedUser === profileUser) {
    panes.push({ menuItem: ' | Settings', render: () => <Tab.Pane attached><Settings /></Tab.Pane> });
  }

  return (
    <div className="main">
      <div className="profile-tab-menu">
        <Tab className="tab" menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </div>
  );
};

/**
* Assigning props types
*/
ProfileMain.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      profileUser: PropTypes.string,
    })
  }),
  authenticatedUser: PropTypes.string,
};

ProfileMain.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      profileUser: 'nadralia',
    })
  }),
  authenticatedUser: 'lou',
};

export default ProfileMain;
