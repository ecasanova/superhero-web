import React from 'react';
import Input from './primitive';

export const TextInput = React.memo(React.forwardRef((props, ref) => <Input {...props} ref={ref} />));
