import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

// Agregar enzyme al ambiente de pruebas
Enzyme.configure({ adapter: new Adapter() });
// to make snapshot compatible with jest
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));