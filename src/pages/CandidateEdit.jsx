import { useState, useEffect } from "react";
import { end_points } from "../services/api";
import { redirect } from "../helpers/alerts";
import { useParams } from "react-router-dom";

function CandidateEdit() {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [location, setLocation] = useState("");
  let [seniority, setSeniority] = useState("");
  let [yearsExperience, setYearsExperience] = useState(0);
  let [skills, setSkills] = useState([]);
  let [appliedOfferId, setAppliedOfferId] = useState("");
  let [status, setStatus] = useState("");
  let [createdAt, setCreatedAt] = useState("");
  let id = useParams();
  function getCandidate() {
    fetch(end_points.candidates + "/" + id.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFullName(data.fullName);
        setEmail(data.email);
        setPhone(data.phone);
        setLocation(data.location);
        setSeniority(data.seniority);
        setYearsExperience(data.yearsExperience);
        setSkills(data.skills);
        setAppliedOfferId(data.appliedOfferId);
        setStatus(data.status);
        setCreatedAt(data.createdAt);
      });
  }
  useEffect(() => {
    getCandidate();
  }, []);

  function updateCandidate() {}

  return (
    <div className="rounded-xxl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-slate-900 text-lg font-bold tracking-tight">
            Editar candidato
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Formulario acorde al modelo
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 whitespace-nowrap">
            status: new
          </span>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-white transition-colors"
          >
            Guardar cambios
          </button>
        </div>
      </div>

      <form className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-12">
            <p className="text-xs font-semibold text-slate-500">Datos</p>
          </div>

          <div className="lg:col-span-8">
            <label className="text-xs font-semibold text-slate-600">
              Nombre completo
            </label>
            <input
              value={fullName}
              type="text"
              defaultValue="Ana Martínez"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Estado
            </label>
            <select
              value={status}
              defaultValue="new"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="new">new</option>
              <option value="screening">screening</option>
              <option value="interview">interview</option>
              <option value="offer">offer</option>
              <option value="hired">hired</option>
              <option value="rejected">rejected</option>
            </select>
          </div>

          <div className="lg:col-span-6">
            <label className="text-xs font-semibold text-slate-600">
              Email
            </label>
            <input
              value={email}
              type="email"
              defaultValue="ana.martinez@gmail.com"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Teléfono
            </label>
            <input
              value={phone}
              type="tel"
              defaultValue="+57 301 555 0101"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Ubicación
            </label>
            <input
              value={location}
              type="text"
              defaultValue="Bogotá, CO"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Senioridad
            </label>
            <select
              value={seniority}
              defaultValue="Junior"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Años de experiencia
            </label>
            <input
              value={yearsExperience}
              type="number"
              min="0"
              defaultValue="1"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Oferta aplicada (ID)
            </label>
            <input
              value={appliedOfferId}
              type="number"
              min="0"
              defaultValue="45"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="lg:col-span-12 pt-2">
            <div className="border-t border-slate-200" />
          </div>

          <div className="lg:col-span-12">
            <p className="text-xs font-semibold text-slate-500">Skills</p>
            <p className="text-xs text-slate-600 mt-0.5">
              Selecciona habilidades
            </p>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {skills.map(() => (
              <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <input
                  defaultChecked
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
                />
                <span className="text-sm font-medium text-slate-700">
                  React
                </span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CandidateEdit;
