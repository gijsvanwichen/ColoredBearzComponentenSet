(() => ({
  name: 'Organogram Old',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { modelId, filter, property, urlDepartment } = options;
    const { env, GetAll, getProperty, useText, Query } = B;
    const { gql } = window.MaterialUI;
    const isDev = env === 'dev';
    const limit = 200;
    const parameter = 'department';
    const urlDepartmentValue = useText(urlDepartment);
    const [selectedDepartment, setSelectedDepartment] = useState(
      urlDepartmentValue,
    );

    // function getTeams() {
    //   console.log('getTeams running ');
    //   return (
    //     <Query fetchPolicy="network-only" query={GET_USERINFO}>
    //       {({ loading, error, data }) => {
    //         if (loading) {
    //           return 'Loading...';
    //         }
    //         if (error) {
    //           return `Error! ${error.Message}`;
    //         }
    //         console.log(data);
    //         return <></>;
    //       }}
    //     </Query>
    //   );
    // }

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
              if (!selectedDepartment) {
                // setSelectedDepartment(results[0].id);
                clickHandler(results[0].id);
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
              console.log(data);
              return <></>;
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
    };
  },
}))();
