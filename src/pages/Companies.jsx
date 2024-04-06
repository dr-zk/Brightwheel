import { useEffect, useState } from "react";
import { formFields, initialFormValues } from "../lib/formFields";
import { DataTable } from "../components/DataTable";
import { UpdateModal } from "../components/UpdateModal";
import { SearchBar } from "../components/SearchBar";
import { companyColumns } from "../lib/companyColumns";
import { deleteDataRecord } from "../lib/deleteDataRecord";
import { toggleModal } from "../lib/toggleModal";
import { showModal } from "../lib/showModal";
import { updateDataRecord } from "../lib/updateDataRecord";
import { handleChange } from "../lib/handleChange";
import useFilteredData from "../hooks/useFilterData";
import { CONSTANTS } from "../constants";
import { getStarredCount } from "../lib/getStarredCount";
import { updateStarredCompany } from "../lib/updateStarredCompany";

const Companies = ({
  originalData,
  setOriginalData,
  loading,
  error,
  refetch,
  search,
  setSearch,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  const [fields] = useState(formFields);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [filteredData, setFilteredData] = useState(null);
  const [starredCount, setStarredCount] = useState(0);

  useEffect(() => {
    const fetchStarredCount = async () => {
      try {
        const count = await getStarredCount();
        setStarredCount(count);
      } catch (error) {
        console.error(CONSTANTS.API.ERROR, error);
      }
    };

    fetchStarredCount();
  }, []);

  useFilteredData(
    originalData,
    CONSTANTS.KEYS.COMPANIES,
    CONSTANTS.KEYS.NAME,
    search,
    setFilteredData
  );

  if (loading) return <p>{CONSTANTS.JSX.LOADING}</p>;
  if (error)
    return (
      <p>
        {CONSTANTS.JSX.ERROR} {error.message}
      </p>
    );

  return (
    <div className="m-5">
      <SearchBar
        search={search}
        setSearch={setSearch}
        modalName={CONSTANTS.KEYS.COMPANIES}
      />
      <DataTable
        data={filteredData || (originalData && originalData.companies)}
        showModal={(record) =>
          showModal(
            record,
            setRecordToUpdate,
            fields,
            setFormValues,
            setIsModalVisible
          )
        }
        handleDelete={(record) => {
          deleteDataRecord(record, refetch);
        }}
        handleStar={(record) => updateStarredCompany(record, refetch)}
        columns={companyColumns}
        title={CONSTANTS.TITLE.COMPANIES}
        starredCount={starredCount}
        canStarred={true}
      />
      <UpdateModal
        isModalVisible={isModalVisible}
        handleCancel={() => toggleModal(setIsModalVisible)}
        handleUpdate={() =>
          updateDataRecord(
            recordToUpdate,
            formValues,
            setIsModalVisible,
            refetch
          )
        }
        handleChange={(e) => handleChange(e, formValues, setFormValues)}
        fields={fields}
        formValues={formValues}
        isCompany={true}
        modalTitle={CONSTANTS.TITLE.UPDATE_COMPANY}
      />
    </div>
  );
};

export default Companies;
