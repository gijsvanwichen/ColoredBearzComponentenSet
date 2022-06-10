(() => ({
  name: 'column',
  type: 'LAYOUT_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env } = B;
    const isDev = env === 'dev';
    const isEmpty = isDev && children.length === 0;
    const { count: parentCount, log } = parent;
    const content = `Empty Column parent count = ${parent.count}`;
    return (
      <div
        onClick={() => log('Message')}
        className={[classes.root, isEmpty ? classes.empty : null].join(' ')}
      >
        {isEmpty ? content : children}
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        textAlign: ({ options: { allignment } }) => allignment,
      },
      empty: {
        minHeight: '4rem',
        alignItems: 'center !importent',
        justifyContent: 'center !important',
        borderWidth: '0.0625rem',
        borderColor: '#AFB5C8',
        borderStyle: 'dashed',
        backgroundColor: '#F0f1f5',
      },
    };
  },
}))();
