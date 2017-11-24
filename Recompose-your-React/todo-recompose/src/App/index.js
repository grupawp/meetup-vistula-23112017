import App from './App';
import {
  lifecycle,
  compose,
  withState,
  withHandlers,
  mapProps,
} from 'recompose';

const enhance = compose(
  withState('input', 'changeInput', ''),
  withState('list', 'changeList', []),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      console.log(
        '%cInput: (was: '
        +`%c${this.props.input || "''"}, `
        +'%cnow: '
        +`%c${nextProps.input || "''"}`
        +'%c)'
        ,'color: #4b9bff'
        ,'color: red'
        ,'color: #4b9bff'
        ,'color: green'
        ,'color: #4b9bff'
      )
    }
  }),
  withHandlers({
    handleChange: ({ changeInput }) => e =>
      changeInput(e.target.value),
    handleRemove: ({ changeList }) => id => () =>
      changeList(list => list.filter(item => item.id !== id)),
    handleClick: ({ input, changeInput, changeList }) => todo =>
      changeList(list => {
        changeInput('') // tricky
        return list.concat({
          id: Math.random(),
          text: input || 'empty',
        })
      }),
  }),
  mapProps(({
    input,
    handleChange,
    handleClick,
    list,
    handleRemove
  }) => ({
    inputPack: { input, handleChange, handleClick },
    listPack: { list, handleRemove },
  }))
);

export default enhance(App);
