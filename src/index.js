import Design from './DesignWithDnd';
import DesignWithoutDnd from './Design';
import stripUUID from './stripUUID';
import { createGroup } from './utils/component-group';

import './styles/index.scss';

Design.stripUUID = stripUUID;
Design.group = createGroup;
Design.DesignWithoutDnd = DesignWithoutDnd;

export default Design;
