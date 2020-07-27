import React from 'react';
import { Button } from 'antd';
import { CesiumViewer, ObjectDetails } from 'react-gis-bridge';
import { Context } from 'utils/global/store';
import { useDispatch } from 'react-redux';
import {
  Cartesian3, VertexFormat, Matrix4, Color,
} from 'cesium';

export default function Viewer() {
  const dispatch = useDispatch();

  const bounds = undefined;

  const editMode = () => {
    dispatch({
      type: 'CHANGE_INTERACTION_MODE',
      payload: 'EDIT_MODE',
    });
  };

  const stuff = () => {
    dispatch({
      type: 'ADD_OBJECT',
      payload: {
        id: '5',
        name: 'daniel',
        type: 'BOX',
        modelMatrix: Matrix4.fromTranslation(
          Cartesian3.fromDegrees(13.380485, 52.518938),
        ),
        visible: true,
        dimensions: new Cartesian3(10, 10, 10),
        categories: ['default', 'box'],
        vertexFormat: VertexFormat.POSITION_AND_NORMAL,
        color: new Color(1, 0, 0, 1),
        data: {
          url: 'test.com',
          text: 'this text explains the meaning of life. its 42',
        },
      },
    });
  };

  const idleNav = () => {
    dispatch({
      type: 'CHANGE_INTERACTION_MODE',
      payload: 'IDLE_NAVIGATION',
    });
  };

  const streetMode = () => {
    dispatch({
      type: 'CHANGE_VIEWER_MODE',
      payload: 'STREET_VIEWER_MODE',
    });
  };

  const TopDowntMode = () => {
    dispatch({
      type: 'CHANGE_VIEWER_MODE',
      payload: 'TOP_DOWN_VIEWER_MODE',
    });
  };

  const placeNewObject = () => {
    dispatch({
      type: 'CHANGE_INTERACTION_MODE',
      payload: 'PLACE_BOX',
    });
  };

  const placePolyline = () => {
    dispatch({
      type: 'ADD_OBJECT',
      payload: {
        id: '6',
        name: 'testline',
        type: 'POLYLINE',
        visible: true,
        categories: ['default', 'polyline'],
        positions:
          [13.380747, 52.516600, 13.385811, 52.516952, 13.386025, 52.515450, 13.390961, 52.515751],
        width: 6,
        vertexFormat: VertexFormat.POSITION_AND_NORMAL,
        color: new Color(1, 0, 0, 1),
      },
    });
  };

  const higlightCategory = () => {
    dispatch({
      type: 'HIGHLIGHT_CATEGORIES',
      payload: {
        categories: ['default'],
        isHighlighted: true,
      },
    });
  };

  const selectCategory = () => {
    dispatch({
      type: 'SELECT_CATEGORY',
      payload: ['default'],
    });
  };

  const deselectCategory = () => {
    dispatch({
      type: 'DESELECT_CATEGORY',
      payload: ['default'],
    });
  };

  const toggleCategory = () => {
    dispatch({
      type: 'TOGGLE_CATEGORY',
      payload: ['default'],
    });
  };

  const createPolyline = () => {
    dispatch({
      type: 'CHANGE_INTERACTION_MODE',
      payload: 'CREATE_POLYLINE',
    });
  };

  const MeasureDistance = () => {
    dispatch({
      type: 'CHANGE_INTERACTION_MODE',
      payload: 'MEASURE_DISTANCE_MODE',
    });
  };

  const addGeojsondata = () => {

  };

  return (
    <div>
      <div>
        <Context.Consumer>
          {
            (value) => (
              <CesiumViewer
                storeContext={value}
                freeMovement
                bounds={bounds}
              />
            )
          }
        </Context.Consumer>
        <ObjectDetails />
      </div>
      <Button color="primary" variant="contained" onClick={editMode}>
        edit mode
      </Button>

      <Button color="primary" variant="contained" onClick={stuff}>
        new Object
      </Button>

      <Button color="primary" variant="contained" onClick={placeNewObject}>
        place new Object
      </Button>

      <Button color="primary" variant="contained" onClick={placePolyline}>
        placePolyline
      </Button>

      <Button color="primary" variant="contained" onClick={idleNav}>
        Idle Navigation
      </Button>

      <Button color="primary" variant="contained" onClick={higlightCategory}>
        Highlight Category Default
      </Button>

      <Button color="primary" variant="contained" onClick={selectCategory}>
        select Category Default
      </Button>

      <Button color="primary" variant="contained" onClick={deselectCategory}>
        deselect Category Default
      </Button>

      <Button color="primary" variant="contained" onClick={toggleCategory}>
        toggle Category Default
      </Button>

      <Button color="primary" variant="contained" onClick={createPolyline}>
        createPolyline
      </Button>

      <Button color="primary" variant="contained" onClick={streetMode}>
        streetMpde
      </Button>

      <Button color="primary" variant="contained" onClick={TopDowntMode}>
        TopDowntMode
      </Button>

      <Button color="primary" variant="contained" onClick={MeasureDistance}>
        MeasureDistance
      </Button>

      <Button color="primary" variant="contained" onClick={addGeojsondata}>
        addGeojsondata
      </Button>
    </div>
  );
}
