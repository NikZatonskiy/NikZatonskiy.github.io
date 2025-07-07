export const sxDivDownPanel = {
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  padding: '0 15px',
  '@media (max-width: 1105px)': {
    flexDirection: 'column',
  }
}

export const sxDownPanelButtonRow = {
  '@media (max-width: 1105px)': {
     flexDirection: 'column',
   }
 }

export const sxDownPanelFilterButton = {
  fontSize: '14px',
  textTransform: 'none',
  padding: '3px 7px',
  borderRadius: '3px',
  color: 'rgb(101, 101, 101)',
  border: '1px transparent solid',
  '&:hover': {
    border: '1px solid rgba(175, 47, 47, 0.2)'
  },
  '&.current-down-panel-button': {
    border: '1px solid rgba(175, 47, 47, 0.2) !important',
  }
}

export const sxClearCompleted = {
  fontSize: '14px',
  textTransform: 'none',
  color: 'rgb(101, 101, 101)',
}