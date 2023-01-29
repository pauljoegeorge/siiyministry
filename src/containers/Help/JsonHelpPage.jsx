import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  addUpcomingEvent,
  updateUpcomingEvent,
  removeUpcomingEvent,
  resetUpcomingEvents
} from '../../redux/reducers/jsonHelpReducer';

const Wrapper = styled.div`
  display: flex;
  max-width: 100vw;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const InputSection = styled.div`
  flex: 0.4;
  margin: 10px 30px 30px 10px;
  max-width: 40%;
`;

const JsonSection = styled.div`
  flex: 0.6;
  max-width: 60%;
  margin: 10px 30px 30px 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.mb ? props.mb : '0px')};
  margin-left: ${(props) => (props.ml ? props.ml : '0px')};
  align-items: center;
`;

const ItemWrapper = styled.div`
  flex: 1;
`;

const Anchor = styled.a`
  color: ${(props) => (props.color ? props.color : 'blue')};
  text-decoration: underline;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  white-space: wrap;
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 400px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const Label = styled.label`
  padding-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const DownloadButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #3e8e41;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const JsonHelpPage = (props) => {
  const { upcomingEvents, addUpcomingEvent, updateUpcomingEvent, removeUpcomingEvent } = props;

  const handleOnChange = (index, newValue, field) => {
    updateUpcomingEvent(index, newValue, field);
  };

  const handleAddEvent = () => {
    addUpcomingEvent();
  };

  const handleRemoveEvent = (eventId) => {
    removeUpcomingEvent(eventId);
  };

  const handleDownload = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(upcomingEvents, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'UpcomingEvents.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <form>
        <Wrapper>
          <InputSection>
            {upcomingEvents['events'].map((item, index) => {
              return (
                <div key={index}>
                  {Object.keys(item).map((key, keyIndex) => (
                    <>
                      <Label>{key}</Label>
                      {keyIndex === 12 ? (
                        <TextArea
                          value={item[key]}
                          onChange={(e) => handleOnChange(index, e.target.value, key)}
                        />
                      ) : (
                        <StyledInput
                          value={item[key]}
                          onChange={(e) => handleOnChange(index, e.target.value, key)}
                          disabled={[0, 10].includes(keyIndex)}
                        />
                      )}
                    </>
                  ))}
                  <FlexWrapper ml="10px">
                    <ItemWrapper>
                      <Anchor href="#" onClick={() => handleAddEvent()}>
                        Add Event(+)
                      </Anchor>
                    </ItemWrapper>
                    <ItemWrapper>
                      {index !== 0 && (
                        <Anchor href="#" onClick={() => handleRemoveEvent(index + 1)} color="red">
                          Remove Event(-)
                        </Anchor>
                      )}
                    </ItemWrapper>
                  </FlexWrapper>
                </div>
              );
            })}
          </InputSection>
          <JsonSection>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(upcomingEvents, null, 2)}</pre>
          </JsonSection>
        </Wrapper>
        <FlexWrapper mb="30px" ml="10px">
          <DownloadButton onClick={(e) => handleDownload(e)}>Download events JSON</DownloadButton>
        </FlexWrapper>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingEvents: state.upcomingEvents,
    initialValues: state.upcomingEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUpcomingEvent: () => dispatch(addUpcomingEvent()),
    updateUpcomingEvent: (index, newValue, field) =>
      dispatch(updateUpcomingEvent({ index, newValue, field })),
    removeUpcomingEvent: (eventId) => dispatch(removeUpcomingEvent(eventId)),
    resetUpcomingEvents: () => dispatch(resetUpcomingEvents())
  };
};

const JsonHelpForm = connect(mapStateToProps, mapDispatchToProps)(JsonHelpPage);
export default reduxForm({
  form: 'jsonHelpPage'
})(JsonHelpForm);
