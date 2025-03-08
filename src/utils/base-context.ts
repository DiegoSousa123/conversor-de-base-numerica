'use client'
import { createContext } from 'react';

const BaseContext = createContext({baseNum: '2', setBaseNum: (baseNum: string) => {baseNum = baseNum;}});

export default BaseContext;