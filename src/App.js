import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="flex">
            <div className="bg-indigo-500" style={{ width: '220px' }}>
                SideBar
            </div>
            <div className="flex-1 mt-5 ml-5 mr-5">
                <div className="card flex flex-wrap gap-2">
                    <div className="flex-1 flex flex-column gap-2 ventas">
                        <label htmlFor="">Tipo de Cliente</label>
                        <Dropdown className="p-inputtext-sm" />
                        <label htmlFor="">RUC</label>
                        <InputText
                            className="p-inputtext-sm p-2"
                            placeholder="Escriba el número de RUC aquí"
                        />
                        <label htmlFor="">Razón Social</label>
                        <InputText className="p-inputtext-sm p-2" />
                        <label htmlFor="">Ubicacion</label>
                        <Dropdown
                            className="p-inputtext-sm"
                            placeholder="Selecciona un departamento"
                        />
                        <Dropdown
                            className="p-inputtext-sm"
                            placeholder="Selecciona un provincia"
                        />
                        <Dropdown
                            className="p-inputtext-sm"
                            placeholder="Selecciona un distrito"
                        />
                        <label htmlFor="">Dirección</label>
                        <InputText className="p-inputtext-sm p-2" />
                        <label htmlFor="">Ubicación del mapa</label>
                        <InputText className="p-inputtext-sm p-2" />
                    </div>

                    <div className="flex-1 flex flex-column gap-2 ventas">
                        <label htmlFor="">Aniversario</label>
                        <Calendar className="p-inputtext-sm" showIcon />
                        <label htmlFor="">Rubro</label>
                        <Dropdown className="p-inputtext-sm" />
                        <label htmlFor="">Cantidad de trabajadores</label>
                        <InputNumber useGrouping={false} />
                        <label htmlFor="">Años de actividad</label>
                        <InputNumber useGrouping={false} />

                        <div className="flex-1 flex flex-column justify-content-between">
                            <div className="flex flex-column gap-2">
                                <label htmlFor="">Logo</label>
                                <div
                                    class="text-xs border-2 border-dashed border-round-lg p-2 flex flex-column justify-content-between align-items-center text-indigo-500 gap-3"
                                    style={{ width: '100%', height: '134px' }}
                                >
                                    <div class="p-toast p-component p-toast-top-right">
                                        <div></div>
                                    </div>
                                    <div class="flex align-items-center gap-2 text-center">
                                        <p>Arrastre y coloque su logo aquí</p>
                                        <div class="flex align-items-center">
                                            <img
                                                width="17px"
                                                height="14.92px"
                                                src="https://i.ibb.co/xG0v5Gy/Icon.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="flex flex-column gap-1 align-items-center justify-content-center text-center">
                                        <p class="font-bold">Recomendaciones</p>
                                        <p>*Tamaño de 500 x 500px</p>
                                        <p>*Alta calidad</p>
                                        <p>*Formato .png o .svg</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-content-end mt-2">
                                <Button
                                    label="Agregar"
                                    style={{
                                        height: '39px',
                                        width: '117.03px',
                                    }}
                                    className="text-sm p-2"
                                ></Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-column xl:justify-content-between justify-content-end xl:w-21rem w-full">
                        <img
                            src="https://i.ibb.co/Hn4z54w/Group-2179.png"
                            alt="Edificio"
                            className="flex-1 xl:flex lg:hidden md:hidden sm:hidden hidden justify-content-center aling-items-center w-21rem h-25rem"
                        ></img>
                        <div className="flex justify-content-end">
                            <Button
                                label="Continuar"
                                style={{ height: '39px', width: '117.03px' }}
                                className="text-sm p-2"
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
