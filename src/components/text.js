(() => ({
  name: 'text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { content, visible, font } = options;
    const { useText, env } = B;
    const isDev = env === 'dev';

    const textContent =
      content.length === 0 && isDev ? 'Empty text component' : useText(content);

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[font || 'Body1'];

    return visible ? (
      <Tag className={[classes.root, classes.test].join(' ')}>
        {textContent}
      </Tag>
    ) : (
      <></>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        color: ({ options: { color, font } }) =>
          color !== 'Transparent'
            ? style.getColor(color)
            : style.getFontColor(font),
        fontSize: ({ options: { font } }) => style.getFontSize(font), // Title3 -> 1.6875rem
        fontFamily: ({ options: { font } }) => style.getFontFamily(font), // Title3 -> Roboto, sans-serif
        fontWeight: ({ options: { font } }) => style.getFontWeight(font), // Title3 -> 400
        textTransform: ({ options: { font } }) => style.getTextTransform(font), // Title3 -> inherit
        letterSpacing: ({ options: { font } }) => style.getLetterSpacing(font), // Title3 -> normal
        '& a': {
          backgroundColor: 'green',
        },
      },
      test1: {
        backgroundColor: 'black',
      },
    };
  },
}))();
