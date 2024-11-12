import { Button, Form, Input, Modal, Space, Table } from "antd";
import DashboardWrapper from "../components/DashboardWrapper";
import { useState } from "react";


// list data
const dataSource  = [
    {
        key: '1',
        id: '1',
        name: 'Mike',
        status: 'Active',
    },
]

const { confirm } = Modal;

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this category?',
    // icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};



const Categories = () => {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editData, setEditData] = useState(null);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

//   list colums
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary"  onClick={() =>handleEdit(record)} >Edit</Button>
            <Button danger onClick={showDeleteConfirm} >Delete</Button>
          </Space>
        ),
      },
  ];

  // Show Edit Modal with pre-filled data
  const handleEdit = (record) => {
    setEditData(record);
    form.setFieldsValue({ name: record.name }); // Set form with existing data
    setIsEditModalOpen(true);
  };

    // Handle form submit for both Add and Edit
    const handleFormSubmit = (values) => {
      if (isEditModalOpen) {
        // Edit Category logic
        console.log("Edited Data:", { ...editData, ...values });
      } else {
        // Add Category logic
        console.log("New Category:", values);
      }
      handleCancel(); // Close modal after submission
    };

  return (
    <DashboardWrapper>
      <div className="flex justify-between ">
        <p className="text-base">categories</p>
        {/* Modal */}
        <Button type="primary" onClick={showModal}>
          Add Category
        </Button>
        <Modal title="Add Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
            <Form onFinish={handleFormSubmit}>
              <Form.Item name="catagory" rules={[{
                required: true,
                message: 'Please input your catagory!',
              }]}>
                <Input placeholder="Catagory Name" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Sumbit</Button>
              </Form.Item>
            </Form>
        </Modal>
      </div>

      {/* Edit Category Modal */}
      <Modal
          title="Edit Category"
          open={isEditModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleFormSubmit}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your category name!',
                },
              ]}
            >
              <Input placeholder="Category Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </Modal>

      {/* Your Categories List */}
      <Table dataSource={dataSource} columns={columns}  />

    </DashboardWrapper>
  );
}

export default Categories;
