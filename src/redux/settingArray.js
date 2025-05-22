import TextField from "../setting/textField";
import Inputvalue from "../setting/InputNumber";
import ColorPicker from '../setting/colorpicker';
import Image from '../setting/Filefield';

const settingArray = [
    { settingId: 121, setting: <TextField /> },
    { settingId: 123, setting: <Inputvalue /> },
    { settingId: 124, setting: <ColorPicker /> }, 
    { settingId: 125, setting: <Image /> } 
];

export default settingArray;
