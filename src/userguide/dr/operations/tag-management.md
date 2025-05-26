# Tag Management

The tag management module is used to categorize and label resources or objects in the system, making it easy for users to quickly search, organize, and manage resources, and improve management efficiency.

## **Tag List**

Go to [Operations] > [Tag Management] > [Tag List] to access the tag management page.

### **Create Tag**

Click "Create Tag" to start. In the pop-up, add the tag name, description, and tag color.

![](./images/tagmanagement-taglist-1.png)

### **Action**

#### **Modify**

Select a created tag, click [More Actions] > [Modify], and you can modify the name, description, and color.

![](./images/tagmanagement-taglist-2.png)

#### **Attach Resource**

Select a created tag, click [More Actions] > [Attach Resource], and bind the tag to the target host resource.

![](./images/tagmanagement-taglist-3.png)

Click [View List] to see the bound host resources.

![](./images/tagmanagement-taglist-4.png)

#### **Detach Resource**

Select a created tag, click [More Actions] > [Detach Resource], and unbind the tag from the target host resource.

![](./images/tagmanagement-taglist-5.png)

#### **Delete**

Select a created tag, click [More Actions] > [Delete] to remove the tag. All resources bound to this tag will be automatically unbound.

![](./images/tagmanagement-taglist-6.png)

## **Batch Association**

Go to [O&M Management] > [Tag Management] > [Batch Association] to access the batch association page.

### **Export Template**

Click "Export Template" to download the template in XML format.

![](./images/tagmanagement-batchassociation-1.png)

##### **Template Field Description**

| Field Name | Description                                   |
|------------|----------------------------------------------|
| HOST ID    | Unique host identifier, usually UUID format   |
| NAME       | Host name, user-defined or system assigned    |
| HOST NAME  | Host network name (Hostname)                  |
| HOST IP    | Host IP address                               |
| HOST MAC   | Host MAC address, unique network interface ID |
| HOST TAGS  | Host tags for classification/grouping/custom  |

##### **Fill in the Template**

Fill in the HOST TAGS field with tag names in the exported template and save.

![](./images/tagmanagement-batchassociation-2.png)

### **Import Tags**

Click "Import Tags" and follow the prompt to drag or upload the file to start importing.

![](./images/tagmanagement-batchassociation-3.png)

After import, tags will be created automatically and resources will be added to the corresponding tags.

![](./images/tagmanagement-batchassociation-4.png)

