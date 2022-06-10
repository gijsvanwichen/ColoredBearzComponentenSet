(() => ({
  name: 'Organogram body',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, Query, Icon } = B;
    const { gql } = window.MaterialUI;
    const isDev = env === 'dev';
    const GET_USERINFO = gql`
      query Item {
        allTeambridge {
          results {
            id
            childTeam {
              id
              name
              hierarchyLevel
              webusers {
                id
                firstName
                lastName
                profileImageUrl
              }
            }
            parentTeam {
              id
              name
              hierarchyLevel
            }
          }
        }
      }
    `;

    function devCards() {
      return (
        <div className={classes.org_tree}>
          <ul className={classes.ul}>
            <li>
              <span>
                <div>
                  <h4>Team name</h4>
                  <Icon name="ExpandMore" />
                </div>
                <hr />
                <div className={classes.employee}>
                  <div className={classes.employee_img}>
                    <img
                      src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                      className={classes.profile_pic}
                      alt="Brown Bearz"
                    />
                  </div>
                  <p>Gijs van Wichen</p>
                </div>
                <div className={classes.employee}>
                  <div className={classes.employee_img}>
                    <img
                      src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                      className={classes.profile_pic}
                      alt="Brown Bearz"
                    />
                  </div>
                  <p>John Doe</p>
                </div>
              </span>
            </li>
            <li>
              <span>
                <div>
                  <h4>Team name</h4>
                  <Icon name="ExpandMore" />
                </div>
                <hr />
                <div className={classes.employee}>
                  <div className={classes.employee_img}>
                    <img
                      src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                      className={classes.profile_pic}
                      alt="Brown Bearz"
                    />
                  </div>
                  <p>Gijs van Wichen</p>
                </div>
                <div className={classes.employee}>
                  <div className={classes.employee_img}>
                    <img
                      src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                      className={classes.profile_pic}
                      alt="Brown Bearz"
                    />
                  </div>
                  <p>John Doe</p>
                </div>
              </span>
              <ul className={classes.ul}>
                <li>
                  <span>
                    <div>
                      <h4>Team name</h4>
                      <Icon name="ExpandMore" />
                    </div>
                    <hr />
                    <div className={classes.employee}>
                      <div className={classes.employee_img}>
                        <img
                          src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                          className={classes.profile_pic}
                          alt="Brown Bearz"
                        />
                      </div>
                      <p>Gijs van Wichen</p>
                    </div>
                    <div className={classes.employee}>
                      <div className={classes.employee_img}>
                        <img
                          src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                          className={classes.profile_pic}
                          alt="Brown Bearz"
                        />
                      </div>
                      <p>John Doe</p>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <div>
                      <h4>Team name</h4>
                      <Icon name="ExpandMore" />
                    </div>
                    <hr />
                    <div className={classes.employee}>
                      <div className={classes.employee_img}>
                        <img
                          src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                          className={classes.profile_pic}
                          alt="Brown Bearz"
                        />
                      </div>
                      <p>Gijs van Wichen</p>
                    </div>
                    <div className={classes.employee}>
                      <div className={classes.employee_img}>
                        <img
                          src="https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png"
                          className={classes.profile_pic}
                          alt="Brown Bearz"
                        />
                      </div>
                      <p>John Doe</p>
                    </div>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    }
    return isDev ? devCards() : devCards();
  })(),
  styles: () => () => ({
    body: {
      paddingLeft: '10px',
      fontFamily: '"Ubuntu", sans-serif',
    },
    '*': {
      margin: '0',
      padding: '0',
    },
    a: {
      textDecoration: 'none',
      color: 'rgb(0, 0, 0)',
    },
    org_tree: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '10px',
      '& ul': {
        position: 'relative',
        padding: '1em 0',
        margin: '0 auto',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      },
      '& ul:first-child': {
        overflow: 'auto',
      },
      '& ul::after': {
        content: '""',
        display: 'table',
        clear: 'both',
      },
      '& li': {
        display: 'inline-block',
        verticalAlign: 'top',
        textAlign: 'center',
        listStyleType: 'none',
        position: 'relative',
        padding: '1em 0.5em 0 0.5em',
      },
      '& li::before, & li::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        right: '50%',
        borderTop: '1px solid #ccc',
        width: '50%',
        height: '16px',
      },
      '& li::after': {
        right: 'auto',
        left: '50%',
        borderLeft: '1px solid #ccc',
      },
      '& li:only-child::after, & li:only-child::before': {
        display: 'none',
      },
      '& li:only-child': {
        padding: '0',
      },
      '& li:only-child span': {
        top: '0',
      },
      '& li:first-child::before, & li:last-child::after': {
        border: '0 none',
      },
      '& li:last-child::before': {
        borderRight: '1px solid #ccc',
        borderRadius: '0 5px 0 0',
      },
      '& li:first-child::after': {
        borderRadius: '5px 0 0 0',
      },
      '& li span:not(:last-child) div:first-child': {
        cursor: 'pointer',
      },
      '& ul ul::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '50%',
        borderLeft: '1px solid #ccc',
        width: '0',
        height: '1em',
      },
      '& li span': {
        border: '1px solid #ccc',
        padding: '0.5em 0.75em',
        textDecoration: 'none',
        display: 'inline-block',
        borderRadius: '5px',
        color: '#333',
        position: 'relative',
        top: '1px',
        width: '200px',
        whiteSpace: 'normal',
        cursor: 'default',
        boxShadow: '0px 0px 3px 1px #e5e5e5',
        zIndex: '2',
        background: '#fff',
      },
      '& li span:hover, & li span:hover + ul li span': {
        background: '#e5104d',
        color: '#fff',
        border: '1px solid #e5104d',
      },
      '& li span:hover a div': {
        color: '#fff',
      },
      '& li span:hover + ul li span a div, & li span:hover p': {
        color: '#fff',
      },
      '& li span:hover + ul li span hr, & li span:hover hr': {
        borderColor: '#fff',
      },
      '& li span:hover + ul li::after, & li span:hover + ul li::before, & li span:hover + ul::before, & li span:hover + ul ul::before': {
        borderColor: '#e5104d',
      },
      '& li span h4': {
        fontSize: '14px',
        margin: '0',
        padding: '0.5em 0',
      },
    },
    profile_pic: {
      width: '35px',
      height: '35px',
      flexShrink: '0',
      objectFit: 'cover',
      borderRadius: '50%',
    },
    employee: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      marginBottom: '2px',
    },
    employee_img: {
      borderRadius: '100%',
      position: 'relative',
      '&::after': {
        position: 'absolute',
        content: '""',
        boxShadow: 'inset 0 0 0 2px #fff, 0px 0px 2px 0px #999',
        borderRadius: '50%',
      },
    },
    img: {
      verticalAlign: 'middle',
      borderStyle: 'none',
    },
    employee_list: {
      padding: '0.5em 0 0 0.4em',
      '& a': {
        textDecoration: 'none',
        color: 'black',
      },
    },
  }),
}))();
