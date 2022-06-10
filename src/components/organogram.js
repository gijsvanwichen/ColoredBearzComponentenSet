(() => ({
  name: 'Organogram',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { modelId, filter, property, urlDepartment } = options;
    const { env, GetAll, getProperty, useText, Query, Icon } = B;
    const { gql } = window.MaterialUI;
    const isDev = env === 'dev';
    const limit = 200;
    const parameter = 'department';
    const urlDepartmentValue = useText(urlDepartment);
    const [selectedDepartment, setSelectedDepartment] = useState(
      urlDepartmentValue,
    );
    const [allTeams, setAllTeams] = useState([]);
    const userNoProfileImage =
      'https://assets.bettyblocks.com/31f5eefa7e3e45fe9e327326a68e401e_assets/files/user-no-profile.png';

    const updateQueryStringParameter = (uri, key, value) => {
      const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
      const separator = uri.indexOf('?') !== -1 ? '&' : '?';
      if (uri.match(re)) {
        return uri.replace(re, `$1${key}=${value}$2`);
      }
      return `${uri + separator + key}=${value}`;
    };

    function clickHandler(value) {
      const newUrl = updateQueryStringParameter(
        window.location.href,
        parameter,
        value,
      );
      window.history.pushState({ html: 'test', pageTitle: 'test' }, '', newUrl);
      setSelectedDepartment(value);
    }

    function devCanvas() {
      return (
        <div>
          <nav className={classes.nav}>
            <div className={classes.navTabs}>
              <button
                type="button"
                className={[classes.navItem, classes.activeNavItem].join(' ')}
              >
                Test 1
              </button>
              <button type="button" className={classes.navItem}>
                Test 2
              </button>
              <button type="button" className={classes.navItem}>
                Test 3
              </button>
            </div>
          </nav>
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
                        src={userNoProfileImage}
                        className={classes.profile_pic}
                        alt="Brown Bearz"
                      />
                    </div>
                    <p>Gijs van Wichen</p>
                  </div>
                  <div className={classes.employee}>
                    <div className={classes.employee_img}>
                      <img
                        src={userNoProfileImage}
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
                        src={userNoProfileImage}
                        className={classes.profile_pic}
                        alt="Brown Bearz"
                      />
                    </div>
                    <p>Gijs van Wichen</p>
                  </div>
                  <div className={classes.employee}>
                    <div className={classes.employee_img}>
                      <img
                        src={userNoProfileImage}
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
                            src={userNoProfileImage}
                            className={classes.profile_pic}
                            alt="Brown Bearz"
                          />
                        </div>
                        <p>Gijs van Wichen</p>
                      </div>
                      <div className={classes.employee}>
                        <div className={classes.employee_img}>
                          <img
                            src={userNoProfileImage}
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
                            src={userNoProfileImage}
                            className={classes.profile_pic}
                            alt="Brown Bearz"
                          />
                        </div>
                        <p>Gijs van Wichen</p>
                      </div>
                      <div className={classes.employee}>
                        <div className={classes.employee_img}>
                          <img
                            src={userNoProfileImage}
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
        </div>
      );
    }

    function renderTeam(team) {
      const subTeams = allTeams.filter(
        subteam => subteam.parentTeamIdentifier === team.id,
      );
      return (
        <li>
          <span>
            <div>
              <h4>{team.name}</h4>
              {/* <Icon name="ExpandMore" /> */}
            </div>
            <hr />
            {team.webusers.map(webuser => (
              <a href={'/profile/' + webuser?.id} className={classes.employee}>
                <div className={classes.employee_img}>
                  <img
                    src={webuser.profilePicture.url || userNoProfileImage}
                    className={classes.profile_pic}
                    alt={webuser.fullName}
                  />
                </div>
                <p>{webuser.fullName}</p>
              </a>
            ))}
          </span>
          {subTeams.length > 0 && (
            <ul className={classes.ul}>
              {subTeams.map(subteam => renderTeam(subteam))}
            </ul>
          )}
        </li>
      );
    }

    function prodCanvas() {
      const GET_USERINFO = gql`
            query Item {
              allTeam(where: { departmentIdentifier: { eq: ${selectedDepartment ||
                1} } }) {
                results {
                  id
                  index
                  name
                  parentTeamIdentifier
                  parentDepartmentIdentifier
                  webusers {
                    id
                    fullName
                    profilePicture
                  }
                }
              }
            }
          `;
      const { name: propertyName } = getProperty(property);
      return (
        <div className={classes.root}>
          <GetAll modelId={modelId} filter={filter} skip={0} take={limit}>
            {({ loading, error, data }) => {
              if (loading) {
                return <span>Loading...</span>;
              }

              if (error) {
                return <span>Something went wrong: {error.message} :(</span>;
              }

              const { totalCount, results } = data;
              if (results[0]) {
                if (!selectedDepartment) {
                  console.log('Set first result ', results[0].id);
                  clickHandler(results[0].id);
                }
              }
              return (
                <nav className={classes.nav}>
                  <div
                    className={classes.navTabs}
                    data-total-count={totalCount}
                  >
                    {results.map(row => (
                      <button
                        key={row.id}
                        data-department-id={row.id}
                        type="button"
                        onClick={() => clickHandler(row.id)}
                        className={[
                          classes.navItem,
                          // eslint-disable-next-line eqeqeq
                          selectedDepartment == row.id
                            ? classes.activeNavItem
                            : null,
                        ].join(' ')}
                      >
                        {row[propertyName]}
                      </button>
                    ))}
                  </div>
                </nav>
              );
            }}
          </GetAll>
          <Query fetchPolicy="network-only" query={GET_USERINFO}>
            {({ loading, error, data }) => {
              if (loading) {
                return 'Loading...';
              }
              if (error) {
                return `Error! ${error.Message}`;
              }
              setAllTeams(data.allTeam.results);
              return (
                <div className={classes.org_tree}>
                  <ul className={classes.ul}>
                    {allTeams
                      .filter(team => team.parentDepartmentIdentifier != null)
                      .map(team => renderTeam(team))}
                  </ul>
                </div>
              );
            }}
          </Query>
        </div>
      );
    }
    return isDev ? devCanvas() : prodCanvas();
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {
        widht: '100%',
      },
      nav: {
        marginTop: '2%',
      },
      navTabs: {
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        borderBottom: '1px solid #dee2e6',
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        flexWrap: 'wrap',
        paddingLeft: '0',
        marginBottom: '0',
        listStyle: 'none',
      },
      navItem: {
        color: '#495057',
        backgroundColor: '#fff',
        borderColor: '#dee2e6 #dee2e6 #fff',
        padding: '0.5rem 1rem',
        border: '1px solid transparent',
        'border-top-left-radius': '0.25rem',
        'border-top-right-radius': '0.25rem',
      },
      activeNavItem: {
        fontWeight: 'bold',
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
        textDecoration: 'none',
        color: 'rgb(0, 0, 0)',
      },
      employee_img: {
        borderRadius: '100%',
        position: 'relative',
        marginRight: '5px',
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
    };
  },
}))();
