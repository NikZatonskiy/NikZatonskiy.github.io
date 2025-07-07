export const sxTodoFormInput = {
  border: 'none',
  height: '65px',
  width: '100%',
  padding: '0px',
  boxSizing: 'border-box',
  fontSize: '24px',
  fontWeight: 300,
  boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
  '& .MuiFilledInput-root': {
    backgroundColor: 'transparent',
    '&:hover': {
    backgroundColor: 'transparent',
    },
    '& .Mui-focused': {
    backgroundColor: 'transparent',
    },
  },
  '& .MuiFilledInput-underline': {
    "::before": {
    display: 'none',
    },
    "::after": {
    display: 'none',
    }
  },
  '& .MuiFilledInput-input': {
    fontSize: '24px',
    padding: '16px',
  },
}

export const sxList = {
  overflowY: 'auto',
  maxHeight: '70vh',
  padding: 0,
  margin: 0,
  borderBottom: '1px solid #e6e6e6',
}

export const sxTodoListItem = {
  borderBottom: '1px solid #e6e6e6',
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontSize: '24px',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    '& .delete-button': {
      visibility: 'visible'
    }
  },
}

export const sxTodoInputLabel = {
  display: 'block',
  position: 'relative',
  padding: 0,
  margin: '0 15px',
  cursor: 'pointer',
  fontSize: '22px',
  userSelect: 'none',
  height: '30px',
  width: '30px',
  flexShrink: 0,
  overflow: 'visible',
  '& input': {
    position: 'absolute',
    zIndex: -1,
    opacity: 0
  },
  '&:hover input ~ .custom-checkmark': {
    backgroundColor: '#ccc'
  },
  '& input:checked ~ .custom-checkmark': {
    border: '1px solid green'
  },
  '& input:checked ~ .custom-checkmark:after': {
    display: 'block'
  },
}

export const sxCustomCheckbox = {
  position: 'absolute',
  zIndex: -1,
  opacity: 0,
  '&.Mui-checked + .custom-checkmark': {
    border: '1px solid green',
    '&:after': {
      display: 'block',
    },
  },
}

export const sxCustomCheckmark = {
  position: 'absolute',
  top: 0,
  height: '30px',
  width: '30px',
  backgroundColor: '#eee',
  borderRadius: '50%',
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'none',
    left: '5px',
    top: '11px',
    width: '17px',
    height: '5px',
    border: 'solid green',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(-50deg) scale(-1, 1)',
  },
}

export const sxListDiv = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: 0,
  position: 'relative',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
}

export const sxSpan = {
  padding: '15px 0',
  wordBreak: "break-word",
  overflowY: 'auto',
  maxHeight: '100px',
  minWidth: '300px',
}

export const sxDeleteButton = {
  visibility: 'hidden',
  color: '#cc9a9a',
  fontSize: '14px',
  background: 'none',
  minWidth: '100px',
  marginLeft: 'auto',
}
