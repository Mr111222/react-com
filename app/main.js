import React from 'react';
import {render} from 'react-dom';
import React1 from './react/react1';
import Time1 from './times/time1';
render(<React1 />, document.getElementById('react1'));
render(<Time1 times = "12" />, document.getElementById('times'));
