(() => ({
  name: 'row',
  type: 'BODY_COMPONENT',
  allowedTypes: ['LAYOUT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { env, Children } = B;
    const isDev = env === 'dev';
    const isEmpty = isDev && children.length === 0;
    const content = 'Empty Row';

    function log(msg) {
      console.log('Hi from row ', msg);
    }
    return (
      <div className={[classes.root, isEmpty ? classes.empty : null].join(' ')}>
        <Children log={log} count={children.length}>
          {isEmpty ? content : children}
        </Children>
      </div>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        display: 'flex',
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
